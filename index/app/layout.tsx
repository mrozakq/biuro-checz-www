import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biuro Checz’: nowa strona',
  description: 'Prototyp nowej strony internetowej Biura Checz’.',
  robots: { index: false, follow: false },
}

// Prototyp ma już tylko wybrany wariant 2: każda strona tej aplikacji przekierowuje do /v2/.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta httpEquiv="refresh" content="0; url=/v2/" />
      </head>
      <body>
        <p className="p-6 text-sm">
          Przekierowanie do nowej strony.{' '}
          <a href="/v2/" className="underline">
            Kliknij, jeśli nic się nie dzieje
          </a>
          .
        </p>
        {children}
      </body>
    </html>
  )
}
