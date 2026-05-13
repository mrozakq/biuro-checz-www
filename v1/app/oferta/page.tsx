import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oferta — Zarządzanie Nieruchomościami | Biuro Checz\'',
  description:
    'Pełna oferta Biuro Checz\': obsługa wspólnot, deweloperów, właścicieli prywatnych, sprawy techniczne, Strefa Mieszkańca, pogotowie 24/7.',
}

const offers = [
  {
    n: '01',
    t: 'Kompleksowa obsługa wspólnot mieszkaniowych',
    d: 'Pełna administracja i księgowość wspólnoty: prowadzenie zebrań, uchwały, sprawozdania finansowe, korespondencja z urzędami i kontrahentami.',
  },
  {
    n: '02',
    t: 'Zarządzanie nieruchomościami deweloperów i osiedli',
    d: 'Obsługa nowych inwestycji — od odbioru technicznego, przez okres rękojmi, po pełne zarządzanie bieżące. Doświadczenie z lokalnymi inwestycjami.',
  },
  {
    n: '03',
    t: 'Obsługa właścicieli prywatnych i firm',
    d: 'Zarządzanie pojedynczymi lokalami, kamienicami i nieruchomościami komercyjnymi. Najem, rozliczenia, formalności urzędowe.',
  },
  {
    n: '04',
    t: 'Prowadzenie spraw techniczno-organizacyjnych',
    d: 'Przeglądy okresowe, koordynacja remontów i napraw, nadzór nad pracami serwisowymi. Współpraca ze sprawdzonymi wykonawcami.',
  },
  {
    n: '05',
    t: 'Ewidencja kosztów i opłat właścicieli lokali',
    d: 'Prowadzenie indywidualnych kont, naliczenia, rozliczenia mediów, monitoring zaległości i windykacja polubowna.',
  },
  {
    n: '06',
    t: 'Internetowa Strefa Mieszkańca',
    d: 'Dostęp online do salda, uchwał, opłat i dokumentów. Transparentność i wygoda dla każdego właściciela lokalu — 24 godziny na dobę.',
  },
  {
    n: '07',
    t: 'Pogotowie lokatorskie 24/7',
    d: 'Obsługa awarii przez całą dobę. Reakcja techniczna w nagłych sytuacjach — bezpieczeństwo mieszkańców to priorytet.',
  },
]

export default function Oferta() {
  return (
    <>
      <section className="bg-brand-ink text-white">
        <div className="container-wide py-20">
          <span className="divider-red mb-5 block" />
          <p className="uppercase tracking-[0.25em] text-xs text-brand-red mb-4">
            Oferta
          </p>
          <h1 className="text-5xl md:text-6xl max-w-4xl">
            Pełen zakres obsługi nieruchomości
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl">
            Od administracji i księgowości po pogotowie techniczne — wszystko pod jednym dachem.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide py-12">
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {offers.map((o) => (
              <article
                key={o.n}
                className="grid md:grid-cols-12 gap-6 py-10 hover:bg-neutral-50 px-2 transition-colors"
              >
                <div className="md:col-span-2 font-serif text-4xl text-brand-red">
                  {o.n}
                </div>
                <h3 className="md:col-span-4 text-2xl">{o.t}</h3>
                <p className="md:col-span-6 text-neutral-700 leading-relaxed">
                  {o.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink text-white">
        <div className="container-wide py-16 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <span className="divider-red mb-4 block" />
            <h2 className="text-3xl md:text-4xl mb-3">
              Indywidualna wycena dla Twojej nieruchomości
            </h2>
            <p className="text-white/70 leading-relaxed">
              Każda nieruchomość jest inna — przygotujemy ofertę dopasowaną do specyfiki
              Twojej wspólnoty, osiedla lub lokalu.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link href="/kontakt/" className="btn-primary">
              Zapytaj o ofertę
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
