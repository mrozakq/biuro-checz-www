import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Hours from '@/components/Hours'
import MapEmbed from '@/components/MapEmbed'
import PageHead from '@/components/PageHead'
import { ExternalIcon } from '@/components/icons'
import { EMAILS, MAP_ROUTE, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Biuro Checz’, ul. Jana III Sobieskiego 223/4, 84-200 Wejherowo. Tel. 733 398 887, biuro@biurochecz.pl. Biuro czynne w poniedziałki, środy i piątki.',
}

export default function Kontakt() {
  return (
    <>
      <PageHead
        title="Kontakt"
        lead="Zapraszamy do biura przy ul. Jana III Sobieskiego w Wejherowie. Można też zadzwonić albo wysłać wiadomość przez formularz."
      />

      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12">
        <div className="space-y-9 lg:col-span-5">
          <div>
            <p className="label mb-2">Adres biura</p>
            <p className="text-[19px] leading-relaxed">
              {SITE.street}
              <br />
              {SITE.postal} {SITE.city}
            </p>
          </div>

          <div>
            <p className="label mb-2">Telefon</p>
            <a href={SITE.phoneHref} className="font-serif text-[30px] hover:text-red">
              {SITE.phoneFull}
            </a>
          </div>

          <div>
            <p className="label mb-2">Poczta e-mail</p>
            <table className="w-full text-[16px]">
              <tbody>
                {EMAILS.map((e) => (
                  <tr key={e.email} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2 pr-4 text-left font-normal text-muted">
                      {e.label}
                    </th>
                    <td className="py-2 text-right">
                      <a href={`mailto:${e.email}`} className="link break-all">
                        {e.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p className="label mb-1">Godziny pracy biura</p>
            <Hours />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-paper p-6 md:p-9">
            <h2 className="text-[30px]">Formularz kontaktowy</h2>
            <p className="mb-7 mt-2 text-muted">
              Wiadomość trafi na adres <span className="text-ink">{SITE.email}</span>.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <section className="wrap">
        <MapEmbed className="h-[380px] border border-line md:h-[440px]" />
        <p className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[15px] text-muted">
          <span>Biuro mieści się w centrum Wejherowa, przy ul. Sobieskiego.</span>
          <a href={MAP_ROUTE} target="_blank" rel="noopener" className="link inline-flex items-center gap-1.5 text-ink">
            Wyznacz trasę w Mapach Google <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </section>
    </>
  )
}
