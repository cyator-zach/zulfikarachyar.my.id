
import { MetadataRoute } from 'next';
import { portfolioItems, tutorialItems } from '@/lib/placeholder-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://zulfikarachyar.my.id'; // Ganti dengan domain Anda yang sebenarnya

  const portfolioUrls = portfolioItems.map(item => ({
    url: `${siteUrl}/portfolio/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const tutorialUrls = tutorialItems.map(item => ({
    url: `${siteUrl}/tutorials/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...portfolioUrls, ...tutorialUrls];
}
