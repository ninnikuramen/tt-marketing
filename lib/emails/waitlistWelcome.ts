/**
 * Welcome email for new Sunbrd waitlist signups.
 *
 * Sent automatically from `/api/waitlist` after a successful signup.
 * HTML is kept inline for email-client compatibility (no external CSS,
 * table-based layout for Outlook, inline styles only).
 */
export function waitlistWelcomeEmail(): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>Welcome to the Sunbrd waitlist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8F8FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'DM Sans', system-ui, sans-serif; color: #0D0A2E; line-height: 1.6;">
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #F8F8FA; opacity: 0;">
    You're on the Sunbrd Gifts waitlist. Here's what happens next.
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F8F8FA;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="max-width: 560px; width: 100%; background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 1px 3px rgba(13, 10, 46, 0.04), 0 8px 28px rgba(13, 10, 46, 0.06);">
          <tr>
            <td style="padding: 40px 40px 32px 40px;">

              <img src="https://sunbrd.com/logo-mark.svg" alt="Sunbrd" width="48" height="48" style="display: block; margin-bottom: 28px; border: 0;" />

              <p style="margin: 0 0 12px 0; font-family: 'Space Mono', ui-monospace, 'Courier New', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #ED9C43;">
                Sunbrd &middot; Technically Thoughtful
              </p>

              <h1 style="margin: 0 0 24px 0; font-size: 28px; line-height: 1.15; font-weight: 700; color: #0D0A2E; letter-spacing: -0.01em;">
                You're on the list.
              </h1>

              <p style="margin: 0 0 18px 0; font-size: 16px; line-height: 1.65; color: #0D0A2E;">
                Thanks for joining the Sunbrd Gifts waitlist. We're opening access in batches while we make sure the product works well for everyone who's already in.
              </p>

              <p style="margin: 0 0 18px 0; font-size: 16px; line-height: 1.65; color: #0D0A2E;">
                When your spot opens up, you'll get one more email from us with your invite code. Until then, we'll leave you alone.
              </p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.65; color: #0D0A2E;">
                If you want to read more about what we're building and why, the <a href="https://sunbrd.com/blog" style="color: #302D7B; text-decoration: underline; text-decoration-color: #ED704D; text-underline-offset: 3px;">Sunbrd blog</a> is where we think out loud about gifting, attention, and the systems that make thoughtfulness possible.
              </p>

              <div style="border-top: 1px solid #EEECF5; margin: 0 0 24px 0;"></div>

              <p style="margin: 0 0 4px 0; font-size: 15px; line-height: 1.6; color: #0D0A2E;">
                Talk soon,
              </p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #0D0A2E;">
                <strong style="font-weight: 600;">Phillip &amp; Andrew</strong><br />
                <span style="color: #6B6880; font-size: 14px;">Co-founders, Sunbrd</span>
              </p>

            </td>
          </tr>
        </table>

        <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="max-width: 560px; width: 100%;">
          <tr>
            <td style="padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-family: 'Space Mono', ui-monospace, 'Courier New', monospace; font-size: 11px; letter-spacing: 0.1em; color: #6B6880;">
                SUNBRD LLC
              </p>
              <p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.5; color: #6B6880;">
                Software for the parts of life that should run themselves.
              </p>
              <p style="margin: 0; font-size: 11px; line-height: 1.5; color: #6B6880;">
                You're receiving this email because you joined the waitlist at <a href="https://sunbrd.com" style="color: #6B6880; text-decoration: underline;">sunbrd.com</a>.<br />
                Didn't sign up? You can safely ignore this email.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}
