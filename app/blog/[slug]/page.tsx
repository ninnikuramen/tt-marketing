import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, formatPublishedDate } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://sunbrd.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      email: 'phillip@sunbrd.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sunbrd LLC',
      url: 'https://sunbrd.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sunbrd.com/logo-mark.svg',
      },
    },
    mainEntityOfPage: `https://sunbrd.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container-editorial py-20 md:py-28">
        <div className="max-w-article">
          <header className="mb-14">
            <p className="eyebrow mb-6">
              <Link href="/blog" className="hover:text-logo-coral transition-colors">
                Sunbrd Gifts · The Blog
              </Link>
            </p>
            <h1 className="font-display text-display-xl font-bold text-indigo-9 leading-[1.0] mb-6">
              {post.title}
            </h1>
            {post.dek && (
              <p className="text-xl md:text-2xl text-surface-6 italic leading-relaxed mb-8 max-w-2xl">
                {post.dek}
              </p>
            )}
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-surface-6">
              <span className="text-indigo-9 font-medium">By {post.author}</span>
              <span className="text-logo-coral">·</span>
              <time dateTime={post.publishedAt}>
                {formatPublishedDate(post.publishedAt)}
              </time>
              <span className="text-logo-coral">·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <hr className="border-surface-1 mb-12" />

          <div className="prose-sunbrd">
            <MDXRemote source={post.content} />
          </div>

          <hr className="border-surface-1 my-16" />

          <aside className="bg-indigo-atmosphere rounded-card p-8 text-white">
            <p className="text-lg italic leading-relaxed">
              Sunbrd Gifts is the AI assistant that handles your gifting from memory to
              delivery — automatically, for everyone in your life. Currently invite-only.{' '}
              <Link
                href="/#waitlist"
                className="text-logo-saffron border-b-2 border-logo-saffron/40 hover:border-logo-saffron transition-colors"
              >
                Join the waitlist.
              </Link>
            </p>
          </aside>

          <aside className="mt-12 pt-10 border-t border-surface-1">
            <p className="text-base text-indigo-9 leading-relaxed">
              <strong className="font-semibold">{post.author}</strong> is a co-founder of
              Sunbrd. He started the company with his brother Andrew after forgetting his
              mother-in-law's birthday twice in a row and deciding that was, technically, a
              software problem.
            </p>
            <p className="text-base text-surface-6 mt-3">
              Reach him at{' '}
              <a
                href="mailto:phillip@sunbrd.com"
                className="text-logo-indigo border-b-2 border-logo-coral/40 hover:text-logo-coral hover:border-logo-coral transition-colors"
              >
                phillip@sunbrd.com
              </a>
              .
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
