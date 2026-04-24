import Link from 'next/link';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPillars />
      <ProblemSection />
      <HowItWorks />
      <WhyDifferent />
      <TheMath />
      <Trust />
      <FinalCTA />
    </>
  );
}

// ==========================================================================
// HERO — dark indigo with the hand-illustrated sunbird as hero visual
// ==========================================================================
function Hero() {
  return (
    <section className="bg-indigo-atmosphere text-white relative overflow-hidden">
      <div className="container-editorial pt-20 md:pt-28 pb-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="fade-in-up eyebrow mb-6">
              Sunbrd Gifts · Technically Thoughtful
            </p>

            <h1
              className="fade-in-up font-display text-display-2xl text-white mb-8 leading-[1.02]"
              style={{ animationDelay: '100ms' }}
            >
              Good at your job.
              <br />
              <span className="italic text-logo-saffron">Bad at birthdays.</span>
            </h1>

            <p
              className="fade-in-up text-lg md:text-xl text-indigo-1 max-w-xl leading-relaxed mb-10"
              style={{ animationDelay: '200ms' }}
            >
              Sunbrd Gifts is the AI assistant that remembers the people you care about,
              picks something they'll actually like, and ships it on time. Powered by
              intelligence, guided by heart.
            </p>

            <div
              className="fade-in-up flex flex-col sm:flex-row gap-4 items-start"
              style={{ animationDelay: '300ms' }}
            >
              <Link href="#waitlist" className="btn-coral">
                Join the waitlist
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-medium hover:text-logo-saffron transition-colors"
              >
                See how it works
                <span className="ml-2">↓</span>
              </Link>
            </div>

            <p
              className="fade-in-up mt-10 font-mono text-xs text-indigo-3 uppercase tracking-widest"
              style={{ animationDelay: '400ms' }}
            >
              Currently invite-only
            </p>
          </div>

          {/* Right: the brand mark, large and proud */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="fade-in-up relative"
              style={{ animationDelay: '500ms' }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-coral-5/20 via-transparent to-transparent blur-3xl" />
              <Image
                src="/logo-mark.svg"
                alt=""
                width={360}
                height={360}
                priority
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// BRAND PILLARS — Smart / Warm / Effortless (per brand guidelines)
// ==========================================================================
function BrandPillars() {
  const pillars = [
    {
      label: 'Smart',
      labelColor: 'text-logo-coral',
      body: 'AI that remembers what people love, so you never have to guess.',
    },
    {
      label: 'Warm',
      labelColor: 'text-logo-indigo',
      body: 'Every gift delivers the feeling of genuine care and attention.',
    },
    {
      label: 'Effortless',
      labelColor: 'text-logo-saffron',
      body: 'Fluid and joyful from insight to delivery.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-surface-1">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="bg-surface-0 border border-surface-1 rounded-card p-8"
            >
              <h3 className={`font-display text-3xl font-bold mb-3 ${pillar.labelColor}`}>
                {pillar.label}
              </h3>
              <p className="text-surface-6 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// PROBLEM
// ==========================================================================
function ProblemSection() {
  return (
    <section className="py-20 md:py-28 border-b border-surface-1">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">The problem</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-display-lg text-indigo-9 mb-8">
              The gift economy runs on guilt and Amazon Prime.
            </h2>
            <div className="max-w-reading space-y-5 text-lg leading-relaxed text-indigo-9/85">
              <p>
                You mean well. You really do. But between the standups and the school pickup
                and the thing your boss keeps adding to the agenda, your sister's birthday
                turned into a $75 gift card bought at a gas station at 9:47 PM.
              </p>
              <p className="text-indigo-9 font-medium border-l-4 border-coral-5 pl-5">
                This is not a character flaw. This is a systems problem. We're in the business
                of systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// HOW IT WORKS
// ==========================================================================
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add your people.',
      body:
        "Mom, best friend, weird uncle who's into sous vide. Drop in birthdays, budgets, and a few notes. Takes about 90 seconds per person.",
    },
    {
      number: '02',
      title: 'We ask them what they want.',
      body:
        "A short, friendly survey goes out ahead of the occasion. They fill it in. You don't have to text \"hey what do u want lol\" at 11 PM.",
    },
    {
      number: '03',
      title: 'Approve or autopilot.',
      body:
        "Our AI picks a few options based on what they told us and what you've given before. You approve in one tap — or set it to auto-approve and genuinely forget about it.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-0 border-b border-surface-1">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-display text-display-lg text-indigo-9">
            Three steps. One of them is <span className="italic text-logo-coral">"do nothing."</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="bg-white border border-surface-1 rounded-card p-8 shadow-card"
            >
              <div className="font-mono text-sm text-logo-saffron mb-6 tracking-wider">
                {step.number}
              </div>
              <h3 className="font-display text-2xl font-bold text-indigo-9 mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-surface-6 leading-relaxed">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// WHY DIFFERENT
// ==========================================================================
function WhyDifferent() {
  const features = [
    {
      title: "Suggestions that aren't generic.",
      body:
        "We use their real interests, not \"women ages 30–45.\" The sous vide uncle gets a sous vide thing. Not a scented candle.",
    },
    {
      title: 'Delivered before the day, not after.',
      body:
        'We plan 15 business days ahead. Birthday Tuesday? We started last month. Panic-buy era: concluded.',
    },
    {
      title: "You're still in charge.",
      body:
        'Every gift needs your thumbs-up before it ships. Budgets are hard caps. Nothing weird happens on your card.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-surface-1">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Why this is different</p>
          <h2 className="font-display text-display-lg text-indigo-9">
            Calendars remind you. <span className="italic text-logo-coral">We actually do the thing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-t-2 border-logo-coral pt-6"
            >
              <h3 className="font-display text-xl font-bold text-indigo-9 mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-surface-6 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// THE MATH — receipt comparison
// ==========================================================================
function TheMath() {
  return (
    <section className="py-20 md:py-28 bg-surface-0 border-b border-surface-1">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">The math</p>
          <h2 className="font-display text-display-lg text-indigo-9">
            A gift you forgot about costs more than one you planned.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Receipt
            title="The forgot-about-it gift"
            items={[
              ['Gas station gift card', '$50'],
              ['Express shipping on a backup', '$22'],
              ['Wine because you feel bad', '$35'],
              ['Relationship tax', 'priceless'],
            ]}
            total="$107+"
            totalLabel="and you still feel weird"
            tone="bad"
          />
          <Receipt
            title="The planned gift"
            items={[
              ['A thing they actually wanted', '$50'],
              ['Arrived on the day', '$0'],
              ['Personal note included', '$0'],
              ['Relationship tax', '$0'],
            ]}
            total="$50"
            totalLabel="and you're the hero"
            tone="good"
          />
        </div>
      </div>
    </section>
  );
}

function Receipt({
  title,
  items,
  total,
  totalLabel,
  tone,
}: {
  title: string;
  items: [string, string][];
  total: string;
  totalLabel: string;
  tone: 'good' | 'bad';
}) {
  const accentClass = tone === 'good' ? 'border-logo-coral' : 'border-surface-2';
  const totalClass = tone === 'good' ? 'text-logo-coral' : 'text-surface-6';

  return (
    <div
      className={`bg-white border border-surface-1 rounded-card p-8 md:p-10 shadow-card border-l-4 ${accentClass}`}
    >
      <h3 className="font-display text-xl font-bold text-indigo-9 mb-6 leading-snug">
        {title}
      </h3>
      <dl className="space-y-3 mb-6 text-sm">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-baseline border-b border-dashed border-surface-1 pb-2"
          >
            <dt className="text-surface-6">{label}</dt>
            <dd className="font-mono text-indigo-9 tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex justify-between items-baseline pt-2">
        <span className="font-display text-lg font-bold text-indigo-9">Total</span>
        <span className={`font-display text-2xl font-bold tabular-nums ${totalClass}`}>
          {total}
        </span>
      </div>
      <p className="text-sm italic text-surface-6 mt-2 text-right">{totalLabel}</p>
    </div>
  );
}

// ==========================================================================
// TRUST
// ==========================================================================
function Trust() {
  const items = [
    {
      title: "Your data isn't for sale.",
      body: 'Not sold. Not shared. Not used to train AI models. Full stop.',
    },
    {
      title: 'Real gifts from real retailers.',
      body: 'Amazon, Target, Starbucks, and a few thousand more. Digital or shipped — their call.',
    },
    {
      title: 'Cancel whenever.',
      body:
        "No annual lock-in. Miss an occasion on our end? Full refund and a sincere apology.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-surface-1">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Trust</p>
          <h2 className="font-display text-display-lg text-indigo-9">
            The fine print, in regular-sized print.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl font-bold text-indigo-9 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-surface-6 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// FINAL CTA — dark indigo waitlist section
// ==========================================================================
function FinalCTA() {
  return (
    <section id="waitlist" className="bg-indigo-atmosphere py-24 md:py-32 text-white">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6">Join the waitlist</p>
          <h2 className="font-display text-display-xl text-white mb-6 leading-tight">
            Be the one who <span className="italic text-logo-saffron">always</span> remembers.
          </h2>
          <p className="text-lg text-indigo-1 mb-10 leading-relaxed">
            We're onboarding in batches. Drop your email and we'll tap you in when a spot opens.
          </p>

          <WaitlistForm darkMode />

          <p className="font-mono text-xs text-indigo-3 mt-6 tracking-wider uppercase">
            One email when you're in. That's it.
          </p>
        </div>
      </div>
    </section>
  );
}
