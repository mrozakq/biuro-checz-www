import type { Metadata } from 'next'
import Hours from '@/components/Hours'
import PageHead from '@/components/PageHead'
import { ExternalIcon } from '@/components/icons'
import { TOMOJDOM_TEXT } from '@/lib/content'
import { DOCS, SITE, asset } from '@/lib/site'
import { t } from '@/lib/typo'

export const metadata: Metadata = {
  title: 'Dla mieszkańców: strefa mieszkańca i druki do pobrania',
  description:
    'Informacje dla właścicieli lokali: logowanie do strefy mieszkańca tomojdom.pl, oświadczenie o liczbie osób i zaliczkach do pobrania, godziny obsługi klienta.',
}

const base = 'grid scroll-mt-6 gap-5 py-10 md:grid-cols-12 md:gap-10 md:py-12'
const row = `${base} border-t-2 border-rule`
const h2 = 'cond text-[34px] uppercase md:col-span-4 md:text-[42px]'

export default function DlaMieszkancow() {
  return (
    <>
      <PageHead
        title="Dla mieszkańców"
        lead="Informacje i druki dla właścicieli lokali w budynkach, którymi zarządzamy."
      />

      <div className="wrap pb-16">
        <section id="strefa" className={base}>
          <h2 className={h2}>Strefa mieszkańca</h2>
          <div className="md:col-span-8">
            <p className="text-[19px] leading-relaxed">{t(TOMOJDOM_TEXT)}</p>
            <p className="mt-3 text-muted">{t('Jeśli nie mają Państwo jeszcze dostępu, prosimy o kontakt z biurem.')}</p>
            <a href={SITE.tomojdom} target="_blank" rel="noopener" className="btn mt-6">
              Zaloguj się w tomojdom.pl <ExternalIcon />
            </a>
          </div>
        </section>

        <section id="druki" className={row}>
          <h2 className={h2}>Druki do pobrania</h2>
          <div className="md:col-span-8">
            {DOCS.map((doc) => (
              <article key={doc.title} className="border-2 border-ink bg-card p-6 md:p-8">
                <h3 className="cond-mid text-[24px] uppercase">{doc.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(doc.text)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {doc.files.map((f, i) => (
                    <a
                      key={f.href}
                      href={asset(f.href)}
                      download
                      className={`whitespace-nowrap px-4 text-[15px] sm:px-6 sm:text-[16px] ${
                        i === 0
                          ? 'btn-red'
                          : 'inline-flex items-center gap-2 border-2 border-ink py-3 font-semibold transition-colors hover:bg-ink hover:text-white'
                      }`}
                    >
                      <DownloadIcon />
                      {f.label}
                      <span className="font-normal opacity-75">({f.size})</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              {t(
                `Wypełnione i podpisane oświadczenie można złożyć w biurze przy ${SITE.street} w Wejherowie. O zmianach liczby osób w lokalu prosimy informować w ciągu 7 dni.`,
              )}
            </p>
          </div>
        </section>

        <section id="obsluga" className={row}>
          <h2 className={h2}>Obsługa klienta</h2>
          <div className="max-w-xl md:col-span-8">
            <Hours />
            <p className="mt-6 text-[18px]">
              Zgłoszenia awarii:{' '}
              <a href={SITE.phoneHref} className="cond text-[30px] hover:text-red">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden>
      <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" />
    </svg>
  )
}
