import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biuro Checz’: propozycje nowej strony',
  description: 'Dwie propozycje nowej strony internetowej Biura Checz’ do wyboru.',
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
