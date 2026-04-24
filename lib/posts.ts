import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type PostMetadata = {
  slug: string;
  title: string;
  dek: string;
  description: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  draft?: boolean;
};

export type Post = PostMetadata & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

function ensurePostsDir() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

export function getAllPostSlugs(): string[] {
  ensurePostsDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? 'Untitled',
    dek: data.dek ?? '',
    description: data.description ?? data.dek ?? '',
    publishedAt: data.publishedAt ?? new Date().toISOString().slice(0, 10),
    author: data.author ?? 'Phillip Brooks',
    readingTime: readingTime(content).text,
    draft: data.draft ?? false,
    content,
  };
}

export function getAllPosts(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => !post.draft || process.env.NODE_ENV === 'development')
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return posts.map(({ content, ...meta }) => meta);
}

export function formatPublishedDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
