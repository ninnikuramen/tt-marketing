import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { waitlistWelcomeEmail } from '@/lib/emails/waitlistWelcome';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Sunbrd <hello@sunbrd.com>';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Dev fallback — log and succeed if env vars aren't set yet
    if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
      console.warn('[waitlist] RESEND_API_KEY or RESEND_WAITLIST_AUDIENCE_ID missing. Email not stored.');
      return NextResponse.json({ ok: true, dev: true });
    }

    // Step 1: add the contact to the audience
    const { error: contactError } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // If contact already exists, silently continue — don't leak membership info
    const isAlreadySubscribed =
      contactError?.name === 'validation_error' &&
      /already exists/i.test(contactError?.message ?? '');

    if (contactError && !isAlreadySubscribed) {
      console.error('[waitlist] Resend contacts.create error:', contactError);
      return NextResponse.json(
        { error: 'We had trouble saving your email. Please try again in a moment.' },
        { status: 500 }
      );
    }

    // Step 2: send the welcome email — only on first signup
    // (Skip on re-submits to avoid spamming people who already got one.)
    if (!isAlreadySubscribed) {
      const { error: emailError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "You're on the Sunbrd waitlist",
        html: waitlistWelcomeEmail(),
      });

      if (emailError) {
        // Don't fail the whole request if the welcome email fails — the
        // contact was saved, which is what matters. Log it for triage.
        console.error('[waitlist] Welcome email send error:', emailError);
      }
    }

    return NextResponse.json({
      ok: true,
      alreadySubscribed: isAlreadySubscribed,
    });
  } catch (err) {
    console.error('[waitlist] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
