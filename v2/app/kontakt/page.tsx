import type { Metadata } from 'next'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'Kontakt — Biuro Checz\' Wejherowo',
  description:
    'Skontaktuj się z Biuro Checz\' — ul. Sobieskiego 223/4 Wejherowo, +48 733 398 887, biuro@biurochecz.pl. Wyślij zapytanie ofertowe.',
}

export default function Kontakt() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-red-tint via-white to-white" />
        <div className="container-wide py-20 md:py-24 max-w-4xl">
          <span className="eyebrow mb-5">Kontakt</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Porozmawiajmy o Twojej <span className="text-brand-red">nieruchomości</span>
          </h1>
          <p className="mt-6 text-xl text-brand-slate max-w-2xl leading-relaxed">
            Zostaw zapytanie lub zadzwoń — odpowiadamy w ciągu jednego dnia roboczego.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid lg:grid-cols-5 gap-8">
          {/* dane kontaktowe */}
          <aside className="lg:col-span-2 space-y-4">
            <ContactCard
              icon="pin"
              label="Adres"
              value={<>ul. Jana III Sobieskiego 223/4<br />Wejherowo</>}
            />
            <ContactCard
              icon="phone"
              label="Infolinia"
              value={
                <a href="tel:+48733398887" className="text-brand-red hover:text-red-700">
                  +48 733 398 887
                </a>
              }
            />
            <ContactCard
              icon="mail"
              label="Email"
              value={
                <a
                  href="mailto:biuro@biurochecz.pl"
                  className="text-brand-red hover:text-red-700 break-all"
                >
                  biuro@biurochecz.pl
                </a>
              }
            />
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red-soft text-brand-red grid place-items-center">
                  <Icon name="clock" className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-brand-slate font-semibold">
                  Godziny otwarcia
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Poniedziałek</span><span className="font-semibold">7:00 – 17:00</span></li>
                <li className="flex justify-between"><span>Środa</span><span className="font-semibold">7:00 – 15:00</span></li>
                <li className="flex justify-between"><span>Piątek</span><span className="font-semibold">7:00 – 13:00</span></li>
                <li className="flex justify-between text-brand-slate/70 pt-2 border-t border-brand-line">
                  <span>Wtorek, Czwartek</span><span>biuro nieczynne</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* formularz */}
          <div className="lg:col-span-3">
            <div className="card !p-8 md:!p-10">
              <h2 className="text-3xl font-bold mb-2">Formularz kontaktowy</h2>
              <p className="text-brand-slate mb-7">Wszystkie pola są wymagane.</p>
              <form className="grid gap-5" action="mailto:biuro@biurochecz.pl" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field name="name" label="Imię i nazwisko" />
                  <Field name="phone" label="Telefon" type="tel" />
                </div>
                <Field name="email" label="Email" type="email" />
                <div>
                  <label className="block text-sm font-semibold mb-2">Treść wiadomości</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-white border border-brand-line rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
                  />
                </div>
                <button type="submit" className="btn-primary justify-self-start">
                  Wyślij zapytanie <Icon name="arrow" className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: 'pin' | 'phone' | 'mail'
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="card flex gap-4 items-start">
      <div className="w-10 h-10 rounded-xl bg-brand-red-soft text-brand-red grid place-items-center shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-brand-slate font-semibold mb-1">
          {label}
        </div>
        <div className="text-lg">{value}</div>
      </div>
    </div>
  )
}

function Field({
  name,
  label,
  type = 'text',
}: {
  name: string
  label: string
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="w-full bg-white border border-brand-line rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
      />
    </div>
  )
}
