import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'Oferta — Zarządzanie Nieruchomościami | Biuro Checz\'',
  description:
    'Pełna oferta Biuro Checz\': obsługa wspólnot, deweloperów, właścicieli prywatnych, sprawy techniczne, Strefa Mieszkańca, pogotowie 24/7.',
}

const offers = [
  { i: 'building', t: 'Kompleksowa obsługa wspólnot mieszkaniowych', d: 'Pełna administracja i księgowość wspólnoty: prowadzenie zebrań, uchwały, sprawozdania finansowe, korespondencja z urzędami i kontrahentami.' },
  { i: 'layers', t: 'Zarządzanie nieruchomościami deweloperów i osiedli', d: 'Obsługa nowych inwestycji — od odbioru technicznego, przez okres rękojmi, po pełne zarządzanie bieżące.' },
  { i: 'user', t: 'Obsługa właścicieli prywatnych i firm', d: 'Zarządzanie pojedynczymi lokalami, kamienicami i nieruchomościami komercyjnymi. Najem, rozliczenia, formalności.' },
  { i: 'tool', t: 'Sprawy techniczno-organizacyjne', d: 'Przeglądy okresowe, koordynacja remontów i napraw, nadzór nad pracami serwisowymi.' },
  { i: 'ledger', t: 'Ewidencja kosztów i opłat właścicieli', d: 'Prowadzenie indywidualnych kont, naliczenia, rozliczenia mediów, monitoring zaległości.' },
  { i: 'monitor', t: 'Internetowa Strefa Mieszkańca', d: 'Dostęp online do salda, uchwał, opłat i dokumentów — 24 godziny na dobę.' },
  { i: 'alert', t: 'Pogotowie lokatorskie 24/7', d: 'Obsługa awarii przez całą dobę. Reakcja techniczna w nagłych sytuacjach.' },
]

export default function Oferta() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-red-tint via-white to-white" />
        <div className="container-wide py-20 md:py-28 max-w-5xl">
          <span className="eyebrow mb-5">Oferta</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Pełen zakres obsługi <span className="text-brand-red">Twojej nieruchomości</span>
          </h1>
          <p className="mt-6 text-xl text-brand-slate max-w-3xl leading-relaxed">
            Od administracji i księgowości po pogotowie techniczne — wszystko, czego potrzebuje
            Twoja wspólnota, osiedle czy lokal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map((o, idx) => (
              <article key={o.t} className="card relative overflow-hidden">
                <div className="absolute -top-3 -right-3 text-7xl font-extrabold text-brand-red/8 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-red-soft text-brand-red grid place-items-center mb-5">
                  <Icon name={o.i as 'building'} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative">{o.t}</h3>
                <p className="text-brand-slate leading-relaxed">{o.d}</p>
              </article>
            ))}

            <article className="rounded-2xl p-7 bg-brand-ink text-white relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-brand-red/40 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3">Twoja nieruchomość?</h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  Przygotujemy indywidualną wycenę dopasowaną do specyfiki Twojej wspólnoty, osiedla lub lokalu.
                </p>
              </div>
              <Link href="/kontakt/" className="btn-primary self-start relative">
                Zapytaj o ofertę <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-brand-bg">
        <div className="container-wide max-w-4xl text-center">
          <span className="eyebrow mb-4 inline-flex">Indywidualna wycena</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Każda nieruchomość jest inna
          </h2>
          <p className="text-brand-slate text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            Skontaktuj się — przygotujemy ofertę dopasowaną do Twoich potrzeb i zakresu obsługi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontakt/" className="btn-primary">
              Zapytaj o ofertę <Icon name="arrow" className="w-4 h-4" />
            </Link>
            <a href="tel:+48733398887" className="btn-secondary">
              <Icon name="phone" className="w-4 h-4" /> +48 733 398 887
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
