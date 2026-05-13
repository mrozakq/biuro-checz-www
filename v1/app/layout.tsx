import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Biuro Checz\' — Zarządzanie Nieruchomościami Wejherowo od 1991',
  description:
    'Biuro Checz\' — profesjonalne zarządzanie nieruchomościami w Wejherowie od 1991 roku. Obsługujemy wspólnoty mieszkaniowe, deweloperów i właścicieli prywatnych.',
  openGraph: {
    title: 'Biuro Checz\' — Zarządzanie Nieruchomościami Wejherowo',
    description:
      'Profesjonalne zarządzanie nieruchomościami w Wejherowie od 1991 roku.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
