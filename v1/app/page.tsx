import Image from 'next/image'
import Link from 'next/link'
import biuro from '@/assets/sobieskiego-biuro.jpg'
import Hours from '@/components/Hours'
import MapEmbed from '@/components/MapEmbed'
import { ExternalIcon } from '@/components/icons'
import { AUDIT, GROUPS, SERVICES, TOMOJDOM_TEXT } from '@/lib/content'
import { MAP_ROUTE, SITE } from '@/lib/site'
import { t } from '@/lib/typo'

export default function Home() {
  return (
    <>
      {/* Wstęp */}
      <section className="wrap grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <h1 className="text-[34px] leading-[1.12] sm:text-[44px] md:text-[54px]">
            Zarządzanie nieruchomościami w&nbsp;Wejherowie od&nbsp;1991&nbsp;roku
          </h1>
          <p className="mt-6 max-w-xl text-[19px] leading-relaxed text-muted">
            {t(
              'Prowadzimy sprawy wspólnot mieszkaniowych, osiedli oraz nieruchomości prywatnych i komercyjnych. Zajmujemy się administracją, księgowością oraz obsługą techniczną i prawną budynków w Wejherowie i okolicach.',
            )}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/kontakt/" className="btn">
              Zapytaj o ofertę
            </Link>
            <span className="text-[17px] text-muted">
              lub zadzwoń:{' '}
              <a href={SITE.phoneHref} className="font-semibold text-ink hover:text-red">
                {SITE.phoneDisplay}
              </a>
            </span>
          </div>
        </div>

        <figure className="lg:col-span-6">
          <Image
            src={biuro}
            alt="Kamienice przy ul. Sobieskiego w Wejherowie, w jednej z nich mieści się biuro Checz’"
            className="h-auto w-full"
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
          />
          <figcaption className="mt-2 text-[14px] italic text-muted">Wejherowo, ul. Sobieskiego</figcaption>
        </figure>
      </section>

      {/* Dla kogo */}
      <section className="border-y border-line bg-paper">
        <div className="wrap py-14 md:py-16">
          <h2 className="text-[32px] md:text-[38px]">Dla kogo pracujemy</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">
            {GROUPS.map((g, i) => (
              <div key={g.title} className={`md:px-8 ${i === 0 ? 'md:pl-0' : 'md:border-l md:border-line'}`}>
                <h3 className="text-[23px]">{g.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(g.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zakres usług */}
      <section className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-[32px] md:text-[38px]">Zakres usług</h2>
          <p className="mt-4 leading-relaxed text-muted">
            {t(
              'Szczegółowy zakres obsługi zawsze zależy od potrzeb danej nieruchomości. Poniżej to, czym zajmujemy się na co dzień.',
            )}
          </p>
          <p className="mt-6">
            <Link href="/oferta/" className="link font-semibold">
              Pełna oferta
            </Link>
          </p>
        </div>

        <div className="lg:col-span-8">
          <dl className="divide-y divide-line border-y border-line">
            {SERVICES.map((s) => (
              <div key={s.id} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
                <dt className="font-serif text-[21px] leading-snug">
                  <Link href={`/oferta/#${s.id}`} className="hover:text-red">
                    {s.title}
                  </Link>
                </dt>
                <dd className="leading-relaxed text-muted sm:col-span-2">{t(s.short)}</dd>
              </div>
            ))}
            <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
              <dt className="font-serif text-[21px] leading-snug">
                <Link href="/utrzymanie-czystosci/" className="hover:text-red">
                  Utrzymanie czystości
                </Link>
              </dt>
              <dd className="leading-relaxed text-muted sm:col-span-2">
                {t('Sprzątanie klatek schodowych i części wspólnych budynków według ustalonego harmonogramu.')}
              </dd>
            </div>
          </dl>

          <blockquote className="mt-10 border-l-4 border-red pl-6">
            <p className="font-serif text-[23px] italic leading-snug md:text-[26px]">{t(AUDIT)}</p>
          </blockquote>
        </div>
      </section>

      {/* tomojdom.pl */}
      <section className="wrap">
        <div className="grid items-center gap-8 border border-ink p-8 md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="label">Dla właścicieli lokali</p>
            <h2 className="mt-2 text-[30px] md:text-[34px]">Strefa mieszkańca w serwisie tomojdom.pl</h2>
            <p className="mt-4 leading-relaxed text-muted">{t(TOMOJDOM_TEXT)}</p>
            <p className="mt-3 text-[15px] text-muted">
              {t('Jeśli nie mają Państwo jeszcze dostępu, prosimy o kontakt z biurem.')}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a href={SITE.tomojdom} target="_blank" rel="noopener" className="btn">
              Zaloguj się w tomojdom.pl <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Biuro i mapa */}
      <section className="wrap grid gap-10 pt-16 md:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-[32px] md:text-[38px]">Zapraszamy do biura</h2>
          <p className="mt-4 text-[19px] leading-relaxed">
            {SITE.street}
            <br />
            {SITE.postal} {SITE.city}
          </p>
          <p className="mt-4">
            <a href={SITE.phoneHref} className="font-semibold hover:text-red">
              tel. {SITE.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="link">
              {SITE.email}
            </a>
          </p>
          <div className="mt-8">
            <p className="label mb-1">Godziny pracy biura</p>
            <Hours />
          </div>
          <p className="mt-6">
            <a href={MAP_ROUTE} target="_blank" rel="noopener" className="btn-outline">
              Wyznacz trasę <ExternalIcon />
            </a>
          </p>
        </div>
        <div className="lg:col-span-7">
          <MapEmbed className="aspect-[4/3] min-h-[320px] border border-line" />
        </div>
      </section>
    </>
  )
}
