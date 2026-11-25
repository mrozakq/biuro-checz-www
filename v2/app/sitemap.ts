import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://biurochecz.pl'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/oferta/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/dla-mieszkancow/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/polityka-prywatnosci/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/kontakt/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
