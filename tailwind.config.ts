import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // ─────────────────────────────────────────────
        // INDIGO — the primary brand canvas
        // (Midnight Indigo scale, from lightest to darkest)
        // ─────────────────────────────────────────────
        indigo: {
          0:  '#F2F0FD',
          1:  '#DDD9F8',
          2:  '#B2ACEF',
          3:  '#8279E0',
          4:  '#5B52D4',
          5:  '#3D31C2',
          6:  '#2E2494',
          7:  '#231C70',
          8:  '#1A1552',
          9:  '#0D0A2E', // Midnight Indigo — hero bg
        },

        // ─────────────────────────────────────────────
        // CORAL / PERSIMMON — secondary, warmth
        // ─────────────────────────────────────────────
        coral: {
          1: '#FFE8E1',
          4: '#FF7A5A',
          5: '#FF5C35',
        },

        // ─────────────────────────────────────────────
        // GOLD — accent
        // ─────────────────────────────────────────────
        gold: {
          1: '#FEF5D8',
          4: '#F7CB58',
          5: '#F0B429',
        },

        // ─────────────────────────────────────────────
        // LOGO-SPECIFIC (used in wordmark and tagline)
        // ─────────────────────────────────────────────
        'logo-indigo':  '#302D7B',  // "sunbrd" in wordmark
        'logo-coral':   '#ED704D',  // "gifts" in wordmark
        'logo-saffron': '#ED9C43',  // "Technically Thoughtful" tagline
        'logo-amber':   '#EE8A3E',  // sunbird mid-tone

        // ─────────────────────────────────────────────
        // NEUTRAL SURFACE SCALE
        // ─────────────────────────────────────────────
        surface: {
          0: '#F8F8FA',
          1: '#EEECF5',
          2: '#D5D2E8',
          6: '#6B6880',
          8: '#2C2A3E',
        },
        white: '#FFFFFF',
      },

      fontFamily: {
        // Display — used for headlines and logo contexts
        // Falls back to DM Sans if Avenir Next isn't available (licensing)
        display: ['"Avenir Next"', '"Avenir"', 'var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Body — DM Sans, the brand's workhorse
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Mono — Space Mono for eyebrow labels + technical accents
        mono: ['var(--font-space-mono)', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        // Generous scale that matches the brand guidelines' 36px display starting point
        'display-2xl': ['clamp(3.25rem, 7vw, 5.5rem)',  { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-xl':  ['clamp(2.5rem, 5.5vw, 4rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(2rem, 4vw, 2.75rem)',     { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2rem)',      { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        // Eyebrow labels — tiny, tracked-out mono
        'eyebrow':     ['0.6875rem', { lineHeight: '1',    letterSpacing: '0.2em' }],
      },

      maxWidth: {
        reading:   '40rem',
        article:   '44rem',
        container: '76rem',
      },

      spacing: {
        section: 'clamp(4rem, 9vw, 7rem)',
      },

      borderRadius: {
        // Brand uses 7px for buttons, 8–10px for cards
        'card': '10px',
        'btn':  '7px',
      },

      boxShadow: {
        // Layered depth for cards on indigo ground
        'card': '0 1px 2px rgba(13, 10, 46, 0.04), 0 8px 28px rgba(13, 10, 46, 0.06)',
        'card-lift': '0 4px 12px rgba(13, 10, 46, 0.06), 0 16px 40px rgba(13, 10, 46, 0.08)',
        // Glow for CTAs on dark
        'glow-coral': '0 0 24px rgba(255, 92, 53, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
