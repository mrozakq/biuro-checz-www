import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import { ExternalIcon } from '@/components/icons'
import { AUDIT, SERVICES, TOMOJDOM_TEXT } from '@/lib/content'
import { SITE } from '@/lib/site'
import { t } from '@/lib/typo'

export const metadata: Metadata = {
  title: 'Oferta: zarządzanie i administrowanie nieruchomościami',
  description:
    'Administracja, księgowość, obsługa techniczna i prawna wspólnot mieszkaniowych w Wejherowie. Audyt kosztów, windykacja, utrzymanie czystości, strefa mieszkańca.',
}

const TOC = [
  ...SERVICES.map((s) => ({ id: s.id, title: s.title })),
  { id: 'audyt', title: 'Audyt kosztów' },
  { id: 'czystosc', title: 'Utrzymanie czystości' },
  { id: 'tomojdom', title: 'Strefa mieszkańca' },
]

export default function Oferta() {
  return (
    <>
      <PageHead
        title="Oferta"
        lead="Obsługujemy wspólnoty mieszkaniowe, deweloperów i osiedla, a także właścicieli prywatnych: osoby fizyczne, firmy i instytucje. Zakres współpracy dobieramy do potrzeb konkretnej nieruchomości."
      />

      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-8">
            <p className="label mb-3">Na tej stronie</p>
            <ul className="space-y-2 border-l border-line pl-4 text-[16px]">
              {TOC.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} className="text-muted hover:text-red">
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden bg-paper p-5 lg:block">
              <p className="font-serif text-[20px] leading-snug">Zapytanie o wycenę</p>
              <p className="mt-2 text-[15px] text-muted">
                {t('Wycenę przygotowujemy po zapoznaniu się z nieruchomością.')}
              </p>
              <Link href="/kontakt/" className="btn mt-4 w-full justify-center">
                Napisz do nas
              </Link>
              <p className="mt-3 text-center text-[15px]">
                lub tel.{' '}
                <a href={SITE.phoneHref} className="font-semibold hover:text-red">
                  {SITE.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-14 lg:col-span-9">
          {SERVICES.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8 border-t border-line pt-8 first:border-0 first:pt-0">
              <h2 className="text-[30px] md:text-[34px]">{s.title}</h2>
              <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">{t(s.text)}</p>
              {s.items.length > 0 && (
                <ul className="prose-list mt-5 grid max-w-3xl gap-2 text-muted sm:grid-cols-2 sm:gap-x-10">
                  {s.items.map((i) => (
                    <li key={i}>{t(i)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section id="audyt" className="scroll-mt-8 border-t border-line pt-8">
            <h2 className="text-[30px] md:text-[34px]">Audyt kosztów na początek współpracy</h2>
            <blockquote className="mt-5 max-w-3xl border-l-4 border-red pl-6">
              <p className="font-serif text-[22px] italic leading-snug">{t(AUDIT)}</p>
            </blockquote>
          </section>

          <section id="czystosc" className="scroll-mt-8 border-t border-line pt-8">
            <h2 className="text-[30px] md:text-[34px]">Utrzymanie czystości</h2>
            <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
              {t(
                'Organizujemy regularne sprzątanie klatek schodowych, wejść, piwnic i pomieszczeń technicznych w budynkach mieszkalnych.',
              )}
            </p>
            <p className="mt-4">
              <Link href="/utrzymanie-czystosci/" className="link font-semibold">
                Zakres sprzątania
              </Link>
            </p>
          </section>

          <section id="tomojdom" className="scroll-mt-8 border-t border-line pt-8">
            <h2 className="text-[30px] md:text-[34px]">Strefa mieszkańca w tomojdom.pl</h2>
            <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">{t(TOMOJDOM_TEXT)}</p>
            <p className="mt-6">
              <a href={SITE.tomojdom} target="_blank" rel="noopener" className="btn">
                Przejdź do tomojdom.pl <ExternalIcon />
              </a>
            </p>
          </section>

          <section className="border-t-4 border-red bg-paper p-8">
            <h2 className="text-[28px]">Każdą ofertę przygotowujemy indywidualnie</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {t(
                'Prosimy o kilka słów o nieruchomości: adres, liczba lokali, czego dotyczy obsługa. Skontaktujemy się, żeby omówić szczegóły.',
              )}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/kontakt/" className="btn">
                Zapytaj o ofertę
              </Link>
              <a href={SITE.phoneHref} className="font-semibold hover:text-red">
                tel. {SITE.phoneDisplay}
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
