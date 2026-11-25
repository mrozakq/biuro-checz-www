import Image from 'next/image'
import Link from 'next/link'
import biuro from '@/assets/sobieskiego-biuro.jpg'
import deptak from '@/assets/sobieskiego-deptak.jpg'
import Hours from '@/components/Hours'
import MapEmbed from '@/components/MapEmbed'
import { ExternalIcon } from '@/components/icons'
import { CLEANING_NOTE, GROUPS, SERVICES, TOMOJDOM_TEXT } from '@/lib/content'
import { MAP_ROUTE, SITE } from '@/lib/site'
import { t } from '@/lib/typo'

export default function Home() {
  return (
    <>
      {/* Zdjęcie i tytuł */}
      <section className="relative">
        <Image
          src={deptak}
          alt="Kamienice przy deptaku w centrum Wejherowa"
          className="h-[42vh] min-h-[280px] w-full object-cover lg:h-[70vh] lg:min-h-[520px]"
          sizes="100vw"
          priority
        />
        <div className="wrap lg:absolute lg:inset-x-0 lg:bottom-0">
          <div className="relative -mt-12 bg-red px-6 py-7 text-white sm:max-w-[640px] md:px-9 md:py-9 lg:mt-0 lg:max-w-[700px]">
            <h1 className="cond text-[34px] uppercase sm:text-[54px] lg:text-[68px]">
              Zarządzamy nieruchomościami w&nbsp;Wejherowie od&nbsp;1991&nbsp;roku
            </h1>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <p className="text-[20px] leading-relaxed md:col-span-7 md:text-[22px]">
          {t(
            'Prowadzimy sprawy wspólnot mieszkaniowych, osiedli oraz nieruchomości prywatnych i komercyjnych w Wejherowie i okolicach. Administracja, księgowość, obsługa techniczna i prawna budynku w jednym biurze.',
          )}
        </p>
        <div className="md:col-span-4 md:col-start-9">
          <Link href="/kontakt/" className="btn">
            Zapytaj o ofertę
          </Link>
          <p className="mt-5 text-muted">lub zadzwoń</p>
          <a href={SITE.phoneHref} className="cond block text-[44px] transition-colors hover:text-red">
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="wrap pb-16 md:pb-24">
        <h2 className="cond mb-8 text-[44px] uppercase md:text-[60px]">Dla kogo pracujemy</h2>
        {GROUPS.map((g) => (
          <div key={g.title} className="grid gap-3 border-t-2 border-rule py-7 md:grid-cols-12 md:gap-8">
            <h3 className="cond-mid text-[28px] uppercase md:col-span-5 md:text-[32px]">{g.title}</h3>
            <p className="text-[18px] leading-relaxed text-muted md:col-span-7">{t(g.text)}</p>
          </div>
        ))}
      </section>

      {/* Usługi */}
      <section className="bg-card py-16 md:py-24">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="cond text-[44px] uppercase md:text-[60px]">Czym się zajmujemy</h2>
            <Link href="/oferta/" className="link text-[17px] font-semibold">
              Cała oferta
            </Link>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.id} className="border-t-[3px] border-rule pt-5">
                <h3 className="cond-mid text-[24px] uppercase">
                  <Link href={`/oferta/#${s.id}`} className="hover:text-red">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{t(s.short)}</p>
              </div>
            ))}
            <div className="border-t-[3px] border-rule pt-5">
              <h3 className="cond-mid text-[24px] uppercase">Utrzymanie czystości</h3>
              <p className="mt-3 leading-relaxed text-muted">{t(CLEANING_NOTE)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* tomojdom.pl */}
      <section className="bg-red text-white">
        <div className="wrap grid items-center gap-8 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="tag text-white/75">e-Kartoteka mieszkańca</p>
            <p className="cond mt-2 text-[58px] lowercase sm:text-[84px] lg:text-[92px] xl:text-[108px]">tomojdom.pl</p>
          </div>
          <div className="max-w-2xl lg:col-span-6">
            <p className="text-[18px] leading-relaxed text-white/90">{t(TOMOJDOM_TEXT)}</p>
            <p className="mt-3 text-[15px] text-white/75">
              {t('Jeśli nie mają Państwo jeszcze dostępu, prosimy o kontakt z biurem.')}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={SITE.tomojdom} target="_blank" rel="noopener" className="btn-light">
                Zaloguj się <ExternalIcon />
              </a>
              <Link href="/dla-mieszkancow/#druki" className="font-semibold underline decoration-2 underline-offset-4 hover:text-ink">
                Druki do pobrania
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biuro */}
      <section className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
        <figure className="lg:col-span-7">
          <Image
            src={biuro}
            alt="Ulica Sobieskiego w Wejherowie, przy której mieści się biuro Checz’"
            className="h-auto w-full"
            sizes="(min-width: 1024px) 700px, 100vw"
          />
          <figcaption className="mt-2 text-[14px] text-muted">Wejherowo, ul. Sobieskiego</figcaption>
        </figure>
        <div className="lg:col-span-5">
          <h2 className="cond text-[44px] uppercase md:text-[56px]">Biuro przy Sobieskiego</h2>
          <p className="mt-5 text-[20px] leading-relaxed">
            {SITE.street}
            <br />
            {SITE.postal} {SITE.city}
          </p>
          <div className="mt-8">
            <Hours />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAP_ROUTE} target="_blank" rel="noopener" className="btn">
              Wyznacz trasę <ExternalIcon />
            </a>
            <Link href="/kontakt/" className="inline-flex items-center border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-white">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <MapEmbed className="h-[360px] border-t-2 border-rule md:h-[440px]" />
    </>
  )
}
