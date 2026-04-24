import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Sunbrd',
  description:
    'Sunbrd builds software for the parts of life that should run themselves. Our first product is Sunbrd Gifts, an AI gifting assistant. This is who we are and why we built it.',
  openGraph: {
    title: 'About Sunbrd',
    description:
      'Sunbrd builds software for the parts of life that should run themselves.',
    url: 'https://sunbrd.com/about',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sunbrd LLC',
  url: 'https://sunbrd.com',
  logo: 'https://sunbrd.com/logo-mark.svg',
  email: 'phillip@sunbrd.com',
  foundingDate: '2025',
  founders: [
    {
      '@type': 'Person',
      name: 'Phillip Brooks',
      jobTitle: 'Co-Founder',
      email: 'phillip@sunbrd.com',
      alumniOf: 'Duke University',
      sameAs: 'https://www.linkedin.com/in/phillip-brooks-9736717/',
    },
    {
      '@type': 'Person',
      name: 'Andrew Brooks',
      jobTitle: 'Co-Founder',
      email: 'andrew@sunbrd.com',
      alumniOf: 'Emory University',
      sameAs: 'https://www.linkedin.com/in/andmib/',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CT',
    addressCountry: 'US',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <article className="container-editorial py-20 md:py-28 max-w-article">
        <header className="mb-16">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-display text-display-xl text-indigo-9 leading-[1.0]">
            About Sunbrd
          </h1>
        </header>

        <Section title="We build software for the parts of life that should run themselves.">
          <p>
            Sunbrd is a small company with a specific bet: that a lot of the quiet obligations
            in modern life — the birthdays, the thank-yous, the follow-ups, the things you{' '}
            <em>mean</em> to do but don't — aren't failures of character. They're failures of
            infrastructure.
          </p>
          <p>We build the infrastructure.</p>
        </Section>

        <Section title="Our first product is Sunbrd Gifts. It exists because I forgot my mother-in-law's birthday. Twice.">
          <p>
            The first time, I apologized. The second time, I realized the apology was going to
            keep happening, on a roughly annual cadence, for the rest of my life, unless
            something changed.
          </p>
          <p>
            The thing I noticed was that I hadn't forgotten because I didn't care. I cared
            enormously. My mother-in-law is great. I had forgotten because I was running my
            work life on a calendar, my money on auto-pay, my health on an Apple Watch, and my
            gifts on vibes. The vibes were losing.
          </p>
          <p>
            Every other domain of my life had tools. Gifting had a Google Calendar reminder
            that I swiped away, and an Amazon search bar I opened at 10 PM when the panic set
            in. The tools available for gifting were all one-third of a real solution:
            reminders that told me when, shopping sites that could sell me something if I
            already knew what, but nothing that did what a thoughtful friend would actually
            do, which is <em>pay attention on your behalf</em> and{' '}
            <em>make the right thing happen on time.</em>
          </p>
          <p>
            So I started building it. Sunbrd Gifts remembers the people you care about, asks
            them what they want, uses AI to suggest options based on their real interests,
            gets your approval, and ships the gift with a personal note — fifteen business
            days early, on the day, every time.
          </p>
          <p>
            It's currently invite-only. We're onboarding in batches while we make sure it
            works well for everyone who's already in.
          </p>
        </Section>

        <Section title="We have a short list of things software should quietly handle.">
          <p>
            Gifts is the first one because it's the one I needed most, and because the
            infrastructure to do it well didn't exist yet. There are a handful of others on
            our list — the kinds of recurring life-admin tasks you'd absolutely pay a
            thoughtful assistant to handle, if thoughtful assistants were a thing most people
            could afford.
          </p>
          <p>
            They're not products yet. We'll announce them when they are. If you want to be the
            first to hear,{' '}
            <Link href="/#waitlist">
              join the Sunbrd Gifts waitlist
            </Link>{' '}
            — anyone on the Gifts list hears about the next thing first.
          </p>
        </Section>

        <Section title="There are two of us.">
          <p>
            I'm{' '}
            <a
              href="https://www.linkedin.com/in/phillip-brooks-9736717/"
              rel="noopener"
            >
              Phillip Brooks
            </a>
            . I'm one of two co-founders at Sunbrd. I live in Connecticut with my wife and our
            ongoing disagreements about thermostat settings. My day job is SVP and Head of
            Enablement Services at Neuberger Berman, where I've spent the last six years
            figuring out how to make a large, complicated organization run more smoothly.
            Before that, I spent a decade at AllianceBernstein in similar roles, with a
            three-year stint running technology for the Japan office. I built the first
            version of Sunbrd Gifts myself, in evenings and weekends, because the product I
            wanted didn't exist and I got tired of waiting for someone else to build it.
          </p>
          <p>
            My co-founder is{' '}
            <a href="https://www.linkedin.com/in/andmib/" rel="noopener">
              Andrew Brooks
            </a>
            . Andrew has a Ph.D. in neuroscience from Emory and spent the first part of his
            career building predictive models of decision-making — including research on how
            brain activity predicts financial markets, and a stint on a DARPA-funded project
            applying fMRI to canine cognition (long story, ask him). He's currently Head of AI
            at Ford Credit. He joined Sunbrd to take what I'd prototyped and make it something
            real people could actually rely on. He's the reason the product doesn't fall over
            when more than one person uses it at a time, and the reason I can write this page
            instead of fixing a bug.
          </p>
          <p>
            We're brothers. This is either an asset or a liability depending on the week. So
            far, mostly asset.
          </p>
          <p>
            You can reach either of us at{' '}
            <a href="mailto:phillip@sunbrd.com">phillip@sunbrd.com</a> or{' '}
            <a href="mailto:andrew@sunbrd.com">andrew@sunbrd.com</a>. We read every email. We
            try to respond to every one that isn't selling us SEO services.
          </p>
        </Section>

        <Section title="A short list of opinions that shape what we build.">
          <Belief
            title="Software should earn its place."
            body="If it doesn't make your life meaningfully easier, it's just another thing on the list. We'd rather build one tool that genuinely works than ten that kind of do."
          />
          <Belief
            title="AI is a feature, not a personality."
            body="We use AI inside Sunbrd Gifts because it's good at matching people to things they'll like. We don't need it to have a name, a face, or an opinion. It's the engine. You're the driver."
          />
          <Belief
            title="Your data isn't currency."
            body="We don't sell it, share it, or train models on it. This is a boring thing to put on an About page. We think that's why most companies don't."
          />
          <Belief
            title="Late is worse than cheap."
            body="A $100 gift that arrives three days after the birthday is a worse gift than a $30 gift that arrives on the day. Sunbrd Gifts is built around this principle. Everything in the product is a consequence of it."
          />
          <Belief
            title="Thoughtfulness is a systems problem."
            body="The people in your life who always seem to remember aren't better than you. They have better systems. We want to give everyone the same systems."
          />
        </Section>

        <hr className="my-20 border-surface-1" />

        <section>
          <h2 className="eyebrow mb-6">Company details</h2>
          <dl className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-10 gap-y-3 text-base">
            <dt className="text-surface-6">Company</dt>
            <dd className="text-indigo-9">Sunbrd LLC</dd>

            <dt className="text-surface-6">Founded</dt>
            <dd className="text-indigo-9">2025</dd>

            <dt className="text-surface-6">Co-founders</dt>
            <dd className="text-indigo-9">Phillip Brooks &amp; Andrew Brooks</dd>

            <dt className="text-surface-6">Headquarters</dt>
            <dd className="text-indigo-9">Connecticut, USA</dd>

            <dt className="text-surface-6">Contact</dt>
            <dd className="text-indigo-9">
              <a
                href="mailto:phillip@sunbrd.com"
                className="text-logo-indigo border-b-2 border-logo-coral/40 hover:text-logo-coral hover:border-logo-coral transition-colors"
              >
                phillip@sunbrd.com
              </a>
            </dd>

            <dt className="text-surface-6">Press</dt>
            <dd className="text-indigo-9">Same email.</dd>

            <dt className="text-surface-6">Partnerships</dt>
            <dd className="text-indigo-9">Same email.</dd>
          </dl>
        </section>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16 md:mb-20">
      <h2 className="font-display text-display-md font-bold text-indigo-9 mb-6 leading-[1.15] max-w-3xl">
        {title}
      </h2>
      <div className="prose-sunbrd">{children}</div>
    </section>
  );
}

function Belief({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="text-lg leading-relaxed">
        <strong className="font-semibold text-indigo-9">{title}</strong>{' '}
        <span className="text-indigo-9/80">{body}</span>
      </p>
    </div>
  );
}
