import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://iusim.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
