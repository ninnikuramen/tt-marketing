import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sunbrd.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,      lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/about`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/blog`,  lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  return [...staticRoutes, ...postRoutes];
}
