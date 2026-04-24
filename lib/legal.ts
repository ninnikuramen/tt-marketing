import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

const LEGAL_DIR = path.join(process.cwd(), 'content');

export function getLegalPage(slug: string): LegalPage {
  const filePath = path.join(LEGAL_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    lastUpdated: data.lastUpdated ?? '',
    content,
  };
}
