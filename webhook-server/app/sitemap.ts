import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://1000pages.navan.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://1000pages.navan.ai/saaragh',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://1000pages.navan.ai/navan-ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://1000pages.navan.ai/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://1000pages.navan.ai/blog/building-websites-ai-agents',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
