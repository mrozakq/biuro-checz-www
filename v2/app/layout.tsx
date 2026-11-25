import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialPin from '@/components/SocialPin'
import { SITE } from '@/lib/site'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const description =
  'Biuro Checz’ w Wejherowie zarządza nieruchomościami od 1991 roku. Obsługujemy wspólnoty mieszkaniowe, deweloperów oraz właścicieli lokali i budynków.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Zarządzanie nieruchomościami Wejherowo | Biuro Checz’',
    template: '%s | Biuro Checz’ Wejherowo',
  },
  description,
  openGraph: {
    title: 'Biuro Checz’: zarządzanie nieruchomościami w Wejherowie',
    description,
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Biuro Checz’',
  },
  robots: { index: true, follow: true },
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Biuro Checz’',
  legalName: SITE.legalName,
  description,
  foundingDate: '1991',
  url: SITE.url,
  telephone: SITE.phoneFull,
  email: SITE.email,
  areaServed: 'Wejherowo i okolice',
  sameAs: [SITE.facebook, SITE.instagram],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    postalCode: SITE.postal,
    addressLocality: SITE.city,
    addressCountry: 'PL',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '07:00', closes: '15:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '13:00' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <SocialPin />
      </body>
    </html>
  )
}
