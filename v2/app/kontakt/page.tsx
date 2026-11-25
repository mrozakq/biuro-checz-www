import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Hours from '@/components/Hours'
import MapEmbed from '@/components/MapEmbed'
import OfficeStatus from '@/components/OfficeStatus'
import PageHead from '@/components/PageHead'
import { ExternalIcon } from '@/components/icons'
import { EMAILS, MAP_ROUTE, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Biuro Checz’, ul. Jana III Sobieskiego 223/5, 84-200 Wejherowo. Tel. 733 398 887, biuro@biurochecz.pl. Obsługa klienta w poniedziałki, środy i piątki.',
}

export default function Kontakt() {
  return (
    <>
      <PageHead
        title="Kontakt"
        lead="Zapraszamy do biura przy ul. Jana III Sobieskiego w Wejherowie. Można też zadzwonić albo napisać przez formularz."
      />

      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="tag text-muted">Telefon</p>
          <a href={SITE.phoneHref} className="cond mt-1 block text-[52px] transition-colors hover:text-red md:text-[60px]">
            {SITE.phoneDisplay}
          </a>
          <p className="mt-1 text-[15px] text-muted">
            <OfficeStatus />
          </p>

          <p className="tag mt-10 text-muted">Adres</p>
          <p className="mt-1 text-[20px] leading-relaxed">
            {SITE.street}
            <br />
            {SITE.postal} {SITE.city}
          </p>
          <a href={MAP_ROUTE} target="_blank" rel="noopener" className="link mt-2 inline-flex items-center gap-1.5 font-semibold">
            Wyznacz trasę <ExternalIcon className="h-3.5 w-3.5" />
          </a>

          <p className="tag mt-10 text-muted">E-mail</p>
          <ul className="mt-2">
            {EMAILS.map((e) => (
              <li key={e.email} className="border-b border-ink/20 py-2.5 last:border-0">
                <span className="block text-[14px] text-muted">{e.label}</span>
                <a href={`mailto:${e.email}`} className="font-semibold hover:text-red">
                  {e.email}
                </a>
              </li>
            ))}
          </ul>

          <p className="tag mt-10 text-muted">Godziny pracy biura</p>
          <div className="mt-1">
            <Hours />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-2 border-ink bg-card p-6 md:p-10">
            <h2 className="cond text-[38px] uppercase md:text-[46px]">Napisz do nas</h2>
            <p className="mb-8 mt-2 text-muted">
              Wiadomość trafi na adres <span className="font-semibold text-ink">{SITE.email}</span>.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <MapEmbed className="mt-8 h-[380px] border-y-2 border-rule md:h-[460px]" />
    </>
  )
}
