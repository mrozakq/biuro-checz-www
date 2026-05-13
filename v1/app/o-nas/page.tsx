import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nas — Biuro Checz\' Wejherowo',
  description:
    'Firma rodzinna od 1991 roku. Zarządcy, księgowi i administratorzy z lokalną wiedzą o Wejherowie i okolicach.',
}

export default function ONas() {
  return (
    <>
      <section className="bg-brand-ink text-white">
        <div className="container-wide py-20">
          <span className="divider-red mb-5 block" />
          <p className="uppercase tracking-[0.25em] text-xs text-brand-red mb-4">
            O firmie
          </p>
          <h1 className="text-5xl md:text-6xl">
            Trzy dekady zarządzania nieruchomościami w Wejherowie
          </h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="divider-red mb-4 block" />
            <h2 className="text-3xl mb-4">Firma rodzinna od 1991 roku</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-lg">
            <p>
              Biuro Checz' powstało w 1991 roku jako jedna z pierwszych firm
              zarządzających nieruchomościami w regionie. Od tego czasu nieprzerwanie
              służymy wspólnotom mieszkaniowym, deweloperom i właścicielom prywatnym
              w Wejherowie i okolicach.
            </p>
            <p>
              Działamy lokalnie, ale w sposób zorganizowany i profesjonalny.
              Znamy regionalne realia, urzędy i sprawdzonych wykonawców — relacje
              budowane przez trzy dekady są naszym największym kapitałem.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-wide">
          <span className="divider-red mb-4 block" />
          <h2 className="text-3xl md:text-4xl mb-12">Nasz zespół</h2>
          <div className="grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              {
                t: 'Zarządcy',
                d: 'Licencjonowani zarządcy z wieloletnią praktyką w obsłudze wspólnot i osiedli.',
              },
              {
                t: 'Księgowi',
                d: 'Specjaliści od rozliczeń wspólnotowych, sprawozdań i ewidencji opłat.',
              },
              {
                t: 'Administratorzy',
                d: 'Codzienna obsługa mieszkańców, koordynacja techniczna i komunikacja.',
              },
            ].map((p) => (
              <div key={p.t} className="bg-white p-10">
                <div className="text-brand-red font-serif text-4xl mb-3">·</div>
                <h3 className="text-2xl mb-3">{p.t}</h3>
                <p className="text-neutral-600 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="divider-red mb-4 block" />
            <h2 className="text-3xl md:text-4xl mb-5">Internetowa Strefa Mieszkańca</h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              Każdy właściciel lokalu ma indywidualny dostęp online do swojego salda,
              uchwał wspólnoty, dokumentów i opłat. Wszystko w jednym miejscu, 24 godziny
              na dobę.
            </p>
            <Link href="/oferta/" className="btn-primary">
              Zobacz ofertę
            </Link>
          </div>
          <div className="bg-brand-ink text-white p-10">
            <ul className="space-y-4">
              {[
                'Aktualne saldo i historia opłat',
                'Uchwały i protokoły zebrań',
                'Dokumenty wspólnoty do pobrania',
                'Zgłaszanie usterek i awarii',
              ].map((line) => (
                <li key={line} className="flex gap-3 text-white/90">
                  <span className="text-brand-red font-serif text-xl leading-none">›</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
