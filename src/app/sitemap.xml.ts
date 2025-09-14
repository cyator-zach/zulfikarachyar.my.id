
import { getPortfolioItems, getTutorials } from '@/lib/data-service';

const URL = 'https://zulfikarachyar.my.id';

export default async function sitemap() {
  const portfolioItems = await getPortfolioItems();
  const portfolioUrls = portfolioItems.map(item => ({
    url: `${URL}/portfolio/${item.id}`,
    lastModified: new Date(item.created_at),
  }));
  
  const tutorials = await getTutorials();
  const tutorialUrls = tutorials.map(item => ({
    url: `${URL}/tutorials/${item.id}`,
    lastModified: new Date(item.created_at),
  }));

  const routes = ['', '/tutorials', '/sitemap'].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...portfolioUrls, ...tutorialUrls];
}
