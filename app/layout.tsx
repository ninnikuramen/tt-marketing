import type { Metadata } from 'next';
import { DM_Sans, Space_Mono } from 'next/font/google';
import Link from 'next/link';
import SunbrdLogo from '@/components/SunbrdLogo';
import '@/styles/globals.css';

// Brand body typeface — DM Sans with full weight range the guidelines call for
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Brand mono typeface — Space Mono for eyebrow labels and technical accents
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunbrd.com'),
  title: {
    default: 'Sunbrd — Technically Thoughtful',
    template: '%s | Sunbrd',
  },
  description:
    'Sunbrd builds software for the parts of life that should run themselves. Our first product is Sunbrd Gifts — AI-powered gifting that remembers what people love, so you never have to guess.',
  openGraph: {
    title: 'Sunbrd — Technically Thoughtful',
    description:
      'Sunbrd builds software for the parts of life that should run themselves. Our first product is Sunbrd Gifts.',
    url: 'https://sunbrd.com',
    siteName: 'Sunbrd',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunbrd — Technically Thoughtful',
    description:
      'AI-powered gifting that remembers what people love, so you never have to guess.',
  },
  icons: {
    icon: '/logo-app-icon.svg',
    apple: '/logo-app-icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

// ==========================================================================
// NAV — clean, light, with the brand mark prominent
// ==========================================================================
function SiteNav() {
  return (
    <header className="border-b border-surface-1 bg-white/95 backdrop-blur sticky top-0 z-50">
      <nav className="container-editorial flex items-center justify-between py-4">
        <Link href="/" aria-label="Sunbrd home" className="group">
          <SunbrdLogo withWordmark size={32} />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-9">
          <li>
            <Link href="/#how-it-works" className="hover:text-logo-coral transition-colors">
              How it works
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-logo-coral transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-logo-coral transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/#waitlist" className="btn-coral">
              Join waitlist
            </Link>
          </li>
        </ul>

        {/* Mobile: compact CTA only */}
        <Link href="/#waitlist" className="md:hidden btn-coral text-xs px-4 py-2">
          Waitlist
        </Link>
      </nav>
    </header>
  );
}

// ==========================================================================
// FOOTER — dark indigo, matches the brand cover treatment
// ==========================================================================
function SiteFooter() {
  return (
    <footer className="mt-section bg-indigo-9 text-indigo-1">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-5" aria-label="Sunbrd home">
              <SunbrdLogo withWordmark variant="dark" size={32} />
            </Link>
            <p className="text-sm text-indigo-2 max-w-xs leading-relaxed mb-6">
              Software for the parts of life that should run themselves.
            </p>
            <p className="eyebrow-dim">Technically Thoughtful</p>
          </div>

          <div>
            <h4 className="font-mono text-eyebrow uppercase text-logo-saffron mb-5">
              Sunbrd Gifts
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#how-it-works" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  Join waitlist
                </Link>
              </li>
              <li>
                <a
                  href="https://gifts.sunbrd.com"
                  className="text-indigo-1 hover:text-logo-saffron transition-colors"
                >
                  Sign in ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-eyebrow uppercase text-logo-saffron mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="mailto:phillip@sunbrd.com"
                  className="text-indigo-1 hover:text-logo-saffron transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-indigo-1 hover:text-logo-saffron transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-indigo-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-xs text-indigo-3">
            © {new Date().getFullYear()} Sunbrd LLC. All rights reserved.
          </p>
          <p className="font-display italic text-logo-saffron text-sm">
            Powered by intelligence, guided by heart.
          </p>
        </div>
      </div>
    </footer>
  );
}
