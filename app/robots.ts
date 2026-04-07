import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://iusim.co'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${APP_BASE_URL}/sitemap.xml`,
  }
}
