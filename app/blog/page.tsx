import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatPublishedDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'The Sunbrd Blog',
  description:
    'Opinions, frameworks, and gift guides from the Sunbrd team. Writing about gifting, attention, and the systems that make thoughtfulness possible.',
  openGraph: {
    title: 'The Sunbrd Blog',
    description: 'Opinions, frameworks, and gift guides from the Sunbrd team.',
    url: 'https://sunbrd.com/blog',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container-editorial py-20 md:py-28 max-w-article">
      <header className="mb-20">
        <p className="eyebrow mb-4">The Blog</p>
        <h1 className="font-display text-display-xl text-indigo-9 leading-[1.0] mb-6">
          Opinions, frameworks,
          <br />
          <span className="italic text-logo-coral">and the occasional gift guide.</span>
        </h1>
        <p className="text-xl text-surface-6 max-w-2xl leading-relaxed">
          Writing about gifting, attention, and the systems that make thoughtfulness possible.
          From <em>Sunbrd</em> — technically thoughtful software.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-surface-6 italic">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-14">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-surface-6 mb-3">
                    <time dateTime={post.publishedAt}>
                      {formatPublishedDate(post.publishedAt)}
                    </time>
                    <span className="text-logo-coral">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="font-display text-display-md font-bold text-indigo-9 group-hover:text-logo-coral transition-colors leading-tight mb-4">
                    {post.title}
                  </h2>
                  {post.dek && (
                    <p className="text-lg text-surface-6 italic leading-relaxed mb-4 max-w-2xl">
                      {post.dek}
                    </p>
                  )}
                  <p className="text-sm text-indigo-9 font-medium">
                    By {post.author}
                    <span className="text-logo-coral ml-3 group-hover:translate-x-1 inline-block transition-transform">
                      Read →
                    </span>
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
