import type { Metadata } from 'next'
import Link from 'next/link'
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

      <section className="wrap py-14 md:py-20">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {CLEANING.map((c) => (
            <div key={c.title} className="border-t-[3px] border-rule pt-5">
              <h2 className="cond-mid text-[26px] uppercase">{c.title}</h2>
              <p className="mt-3 text-[18px] leading-relaxed text-muted">{t(c.text)}</p>
            </div>
          ))}
          <div className="bg-ink p-7 text-white">
            <p className="cond-mid text-[26px] uppercase text-red">Harmonogram</p>
            <p className="mt-3 text-[18px] leading-relaxed text-white/85">
              {t(
                'Częstotliwość i zakres prac ustalamy ze wspólnotą, tak żeby odpowiadały wielkości budynku i potrzebom mieszkańców.',
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red text-white">
        <div className="wrap grid items-center gap-8 py-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="cond text-[40px] uppercase md:text-[52px]">Wycena sprzątania</h2>
            <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-white/90">
              {t('Prosimy podać adres budynku, liczbę klatek i oczekiwaną częstotliwość sprzątania.')}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/kontakt/?temat=sprzatanie" className="btn-light">
              Zapytaj o wycenę
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
