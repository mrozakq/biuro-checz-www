import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://biurochecz.pl'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/o-nas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/oferta/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/kontakt/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
