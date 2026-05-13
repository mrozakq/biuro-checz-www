import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'O nas — Biuro Checz\' Wejherowo',
  description:
    'Firma rodzinna od 1991 roku. Zarządcy, księgowi i administratorzy z lokalną wiedzą o Wejherowie i okolicach.',
}

export default function ONas() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-red-tint via-white to-white" />
        <div className="container-wide py-20 md:py-28 max-w-5xl">
          <span className="eyebrow mb-5">O firmie</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Trzy dekady zarządzania nieruchomościami w&nbsp;Wejherowie
          </h1>
          <p className="mt-6 text-xl text-brand-slate max-w-3xl leading-relaxed">
            Biuro Checz' powstało w 1991 roku jako jedna z pierwszych firm zarządzających
            nieruchomościami w regionie. Od tego czasu nieprzerwanie służymy wspólnotom,
            deweloperom i właścicielom prywatnym.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-4">Nasza historia</span>
            <h2 className="text-4xl font-bold tracking-tight mb-5">Firma rodzinna z tradycją</h2>
            <div className="space-y-4 text-brand-slate text-lg leading-relaxed">
              <p>
                Działamy lokalnie, ale w sposób zorganizowany i profesjonalny.
                Znamy regionalne realia, urzędy i sprawdzonych wykonawców.
              </p>
              <p>
                Relacje budowane przez trzy dekady są naszym największym kapitałem —
                a stabilność firmy daje klientom pewność, że ich nieruchomość jest w dobrych rękach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '1991', l: 'Rok założenia' },
              { v: '30+', l: 'Lat działalności' },
              { v: '500+', l: 'Zarządzanych lokali' },
              { v: '1', l: 'Lokalny lider' },
            ].map((s) => (
              <div key={s.l} className="card text-center">
                <div className="text-5xl font-bold text-brand-red mb-2">{s.v}</div>
                <div className="text-sm text-brand-slate">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-bg">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Nasz zespół</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Wszystko, czego potrzeba, pod jednym dachem
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Zarządcy z licencją, doświadczeni księgowi i administratorzy z lokalną wiedzą.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { i: 'building', t: 'Zarządcy', d: 'Licencjonowani specjaliści z wieloletnią praktyką w obsłudze wspólnot i osiedli.' },
              { i: 'ledger', t: 'Księgowi', d: 'Eksperci od rozliczeń wspólnotowych, sprawozdań finansowych i ewidencji opłat.' },
              { i: 'user', t: 'Administratorzy', d: 'Codzienna obsługa mieszkańców, koordynacja techniczna i sprawna komunikacja.' },
            ].map((p) => (
              <div key={p.t} className="card">
                <div className="w-12 h-12 rounded-xl bg-brand-red-soft text-brand-red grid place-items-center mb-5">
                  <Icon name={p.i as 'building'} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.t}</h3>
                <p className="text-brand-slate leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-ink text-white rounded-3xl p-10">
            <Icon name="monitor" className="w-10 h-10 text-brand-red mb-5" />
            <h3 className="text-2xl font-bold mb-3">Strefa Mieszkańca online</h3>
            <ul className="space-y-3 text-white/90">
              {[
                'Aktualne saldo i historia opłat',
                'Uchwały i protokoły zebrań',
                'Dokumenty wspólnoty do pobrania',
                'Zgłaszanie usterek i awarii',
              ].map((line) => (
                <li key={line} className="flex gap-3 items-start">
                  <Icon name="check" className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow mb-4">Transparentność</span>
            <h2 className="text-4xl font-bold tracking-tight mb-5">
              Internetowa Strefa Mieszkańca
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-7">
              Każdy właściciel lokalu ma indywidualny dostęp online do swojego salda,
              uchwał, opłat i dokumentów — 24 godziny na dobę, z dowolnego miejsca.
            </p>
            <Link href="/oferta/" className="btn-primary">
              Zobacz ofertę <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
