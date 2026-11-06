import type { MetadataRoute } from 'next';
import { postsConfig } from '@/config/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://aroldjoutsop.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${SITE_URL}/assets/images/about/arol.jpg`,
        `${SITE_URL}/assets/images/about/arol-hero.jpg`,
      ],
    },
  ];

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/seo-geo/`,
      lastModified: new Date('2026-11-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Seuls les articles signés par Arol Djoutsop sont proposés à l'indexation.
  const posts: MetadataRoute.Sitemap = postsConfig.posts
    .filter((post) => (post.author as string) === 'Arol Djoutsop')
    .map((post) => ({
    url: `${SITE_URL}/posts/${post.slug.replace('posts/', '')}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...home, ...pages, ...posts];
}
