import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt — Biuro Checz\' Wejherowo',
  description:
    'Skontaktuj się z Biuro Checz\' — ul. Sobieskiego 223/4 Wejherowo, +48 733 398 887, biuro@biurochecz.pl. Wyślij zapytanie ofertowe.',
}

export default function Kontakt() {
  return (
    <>
      <section className="bg-brand-ink text-white">
        <div className="container-wide py-20">
          <span className="divider-red mb-5 block" />
          <p className="uppercase tracking-[0.25em] text-xs text-brand-red mb-4">
            Kontakt
          </p>
          <h1 className="text-5xl md:text-6xl">Porozmawiajmy o Twojej nieruchomości</h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl">
            Zostaw zapytanie lub zadzwoń — odpowiadamy w ciągu jednego dnia roboczego.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <div>
            <span className="divider-red mb-4 block" />
            <h2 className="text-3xl mb-8">Dane kontaktowe</h2>

            <div className="space-y-7">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Adres
                </div>
                <p className="text-lg">ul. Jana III Sobieskiego 223/4<br />Wejherowo</p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Infolinia
                </div>
                <a
                  href="tel:+48733398887"
                  className="text-lg text-brand-red hover:text-brand-red-dark"
                >
                  +48 733 398 887
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Email
                </div>
                <a
                  href="mailto:biuro@biurochecz.pl"
                  className="text-lg text-brand-red hover:text-brand-red-dark"
                >
                  biuro@biurochecz.pl
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Godziny otwarcia
                </div>
                <table className="text-sm">
                  <tbody className="[&_td]:py-1 [&_td]:pr-6">
                    <tr><td>Poniedziałek</td><td>7:00 – 17:00</td></tr>
                    <tr><td>Środa</td><td>7:00 – 15:00</td></tr>
                    <tr><td>Piątek</td><td>7:00 – 13:00</td></tr>
                    <tr className="text-neutral-500">
                      <td>Wtorek, Czwartek</td><td>biuro nieczynne</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 md:p-10">
            <h2 className="text-3xl mb-2">Formularz kontaktowy</h2>
            <p className="text-neutral-600 mb-7 text-sm">
              Wszystkie pola są wymagane.
            </p>
            <form className="space-y-5" action="mailto:biuro@biurochecz.pl" method="post" encType="text/plain">
              <Field name="name" label="Imię i nazwisko" />
              <Field name="phone" label="Telefon" type="tel" />
              <Field name="email" label="Email" type="email" />
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2">
                  Treść wiadomości
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-red"
                />
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
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
      <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="w-full bg-white border border-neutral-300 px-4 py-3 focus:outline-none focus:border-brand-red"
      />
    </div>
  )
}
