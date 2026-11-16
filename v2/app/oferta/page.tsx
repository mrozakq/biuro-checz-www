import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import { ExternalIcon } from '@/components/icons'
import { AUDIT, GROUPS, SERVICES, TOMOJDOM_TEXT } from '@/lib/content'
import { SITE } from '@/lib/site'
import { t } from '@/lib/typo'

export const metadata: Metadata = {
  title: 'Oferta: zarządzanie i administrowanie nieruchomościami',
  description:
    'Administracja, księgowość, obsługa techniczna i prawna wspólnot mieszkaniowych w Wejherowie. Audyt kosztów, windykacja, utrzymanie czystości, strefa mieszkańca.',
}

export default function Oferta() {
  return (
    <>
      <PageHead
        title="Oferta"
        lead="Zakres współpracy dobieramy do potrzeb konkretnej nieruchomości. Poniżej opisujemy, czym zajmujemy się najczęściej."
      />

      <section className="wrap py-10">
        <p className="tag mb-4 text-muted">Obsługujemy</p>
        <ul className="square-list flex flex-wrap gap-x-10 gap-y-2">
          {GROUPS.map((g) => (
            <li key={g.title} className="cond-mid text-[20px] uppercase">
              {g.title}
            </li>
          ))}
        </ul>
      </section>

      <div className="wrap pb-8">
        {SERVICES.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="grid scroll-mt-6 gap-5 border-t-2 border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12"
          >
            <h2 className="cond text-[34px] uppercase md:col-span-4 md:text-[42px]">{s.title}</h2>
            <div className="md:col-span-8">
              <p className="text-[19px] leading-relaxed">{t(s.text)}</p>
              {s.items.length > 0 && (
                <ul className="square-list mt-5 grid gap-2 text-muted sm:grid-cols-2 sm:gap-x-10">
                  {s.items.map((i) => (
                    <li key={i}>{t(i)}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section id="audyt" className="grid scroll-mt-6 gap-5 border-t-2 border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12">
          <h2 className="cond text-[34px] uppercase text-red md:col-span-4 md:text-[42px]">Audyt kosztów</h2>
          <p className="text-[21px] leading-relaxed md:col-span-8">{t(AUDIT)}</p>
        </section>

        <section id="czystosc" className="grid scroll-mt-6 gap-5 border-t-2 border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12">
          <h2 className="cond text-[34px] uppercase md:col-span-4 md:text-[42px]">Utrzymanie czystości</h2>
          <div className="md:col-span-8">
            <p className="text-[19px] leading-relaxed">
              {t(
                'Organizujemy regularne sprzątanie klatek schodowych, wejść, piwnic i pomieszczeń technicznych w budynkach mieszkalnych.',
              )}
            </p>
            <Link href="/utrzymanie-czystosci/" className="link mt-4 inline-block font-semibold">
              Zakres sprzątania
            </Link>
          </div>
        </section>

        <section id="tomojdom" className="grid scroll-mt-6 gap-5 border-t-2 border-rule py-10 md:grid-cols-12 md:gap-10 md:py-12">
          <h2 className="cond text-[34px] uppercase md:col-span-4 md:text-[42px]">Strefa mieszkańca</h2>
          <div className="md:col-span-8">
            <p className="text-[19px] leading-relaxed">{t(TOMOJDOM_TEXT)}</p>
            <a href={SITE.tomojdom} target="_blank" rel="noopener" className="btn mt-6">
              Przejdź do tomojdom.pl <ExternalIcon />
            </a>
          </div>
        </section>
      </div>

      <section className="bg-red text-white">
        <div className="wrap grid items-center gap-8 py-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="cond text-[40px] uppercase md:text-[52px]">Wycena dla Państwa nieruchomości</h2>
            <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-white/90">
              {t(
                'Prosimy o kilka słów o budynku: adres, liczba lokali, czego ma dotyczyć obsługa. Oddzwonimy, żeby omówić szczegóły.',
              )}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/kontakt/" className="btn-light">
              Zapytaj o ofertę
            </Link>
            <a href={SITE.phoneHref} className="cond mt-4 block text-[36px] hover:underline">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
