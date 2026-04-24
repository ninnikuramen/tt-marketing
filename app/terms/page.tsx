import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import { getLegalPage } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service — Sunbrd',
  description: 'The legal terms that govern your use of Sunbrd and Sunbrd Gifts. Written to be readable.',
  alternates: { canonical: 'https://sunbrd.com/terms' },
};

export default function TermsPage() {
  const page = getLegalPage('terms');

  return (
    <div className="min-h-screen bg-cream">
      <article className="mx-auto max-w-3xl px-6 py-20 md:px-8">
        <header className="mb-12 border-b border-indigo-1 pb-10">
          <p className="eyebrow mb-3">Legal · Sunbrd LLC</p>
          <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-indigo-9">
            {page.title}
          </h1>
          {page.lastUpdated && (
            <p className="text-sm text-muted">
              Last updated:{' '}
              <time dateTime={page.lastUpdated}>
                {new Date(page.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
          )}
        </header>

        <div className="prose-sunbrd">
          <MDXRemote source={page.content} />
        </div>
      </article>
    </div>
  );
}
