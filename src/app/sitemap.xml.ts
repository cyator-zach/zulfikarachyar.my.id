
import { MetadataRoute } from 'next';
import { portfolioItems, tutorialItems } from '@/lib/placeholder-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://zulfikarachyar.my.id';

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
        url: `${siteUrl}/tutorials`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    },
    {
        url: `${siteUrl}/sitemap`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }
  ];

  const portfolioUrls = portfolioItems.map((item) => ({
    url: `${siteUrl}/portfolio/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const tutorialUrls = tutorialItems.map((item) => ({
    url: `${siteUrl}/tutorials/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...portfolioUrls, ...tutorialUrls];
}
