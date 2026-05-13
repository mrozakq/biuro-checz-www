import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biuro Checz\' — Warianty prototypów WWW',
  description:
    'Wybierz wariant prototypu strony WWW dla Biuro Checz\' — zarządzanie nieruchomościami Wejherowo.',
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
