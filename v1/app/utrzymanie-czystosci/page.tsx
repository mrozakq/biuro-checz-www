import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import deptak from '@/assets/sobieskiego-deptak.jpg'
import PageHead from '@/components/PageHead'
import { CLEANING } from '@/lib/content'
import { SITE } from '@/lib/site'
import { t } from '@/lib/typo'

export const metadata: Metadata = {
  title: 'Utrzymanie czystości w budynkach',
  description:
    'Sprzątanie klatek schodowych, wejść, piwnic i pomieszczeń wspólnych w budynkach mieszkalnych w Wejherowie i okolicach. Harmonogram ustalany ze wspólnotą.',
}

export default function UtrzymanieCzystosci() {
  return (
    <>
      <PageHead
        title="Utrzymanie czystości"
        lead="Organizujemy regularne sprzątanie części wspólnych budynków mieszkalnych: klatek schodowych, wejść, piwnic i pomieszczeń technicznych."
      />

      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-[30px] md:text-[34px]">Co obejmuje sprzątanie</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {CLEANING.map((c) => (
              <div key={c.title} className="py-6">
                <h3 className="text-[21px]">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t(c.text)}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed">
            {t(
              'Częstotliwość i zakres prac ustalamy ze wspólnotą, tak żeby odpowiadały wielkości budynku i potrzebom mieszkańców.',
            )}
          </p>
        </div>

        <aside className="lg:col-span-5">
          <figure>
            <Image
              src={deptak}
              alt="Zadbane kamienice w centrum Wejherowa"
              className="h-auto w-full"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
            <figcaption className="mt-2 text-[14px] italic text-muted">Wejherowo, centrum miasta</figcaption>
          </figure>

          <div className="mt-8 border-t-4 border-red bg-paper p-6">
            <p className="font-serif text-[22px] leading-snug">Wycena sprzątania budynku</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {t('Prosimy podać adres, liczbę klatek i oczekiwaną częstotliwość sprzątania.')}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/kontakt/?temat=sprzatanie" className="btn">
                Zapytaj o wycenę
              </Link>
              <a href={SITE.phoneHref} className="font-semibold hover:text-red">
                tel. {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
