import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

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

    const { error } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      // Treat "already exists" as success to avoid leaking membership info
      if (error.name === 'validation_error' && /already exists/i.test(error.message ?? '')) {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }
      console.error('[waitlist] Resend error:', error);
      return NextResponse.json(
        { error: 'We had trouble saving your email. Please try again in a moment.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[waitlist] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
