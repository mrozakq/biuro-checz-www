import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-ink text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,#CC0000,transparent_60%)]" />
        <div className="container-wide relative py-24 md:py-36">
          <span className="divider-red mb-6 block" />
          <p className="uppercase tracking-[0.25em] text-xs text-brand-red mb-5">
            od 1991 roku — Wejherowo
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Profesjonalne zarządzanie nieruchomościami od 1991 roku
          </h1>
          <p className="mt-7 max-w-2xl text-white/75 text-lg leading-relaxed">
            Obsługujemy wspólnoty mieszkaniowe, deweloperów i właścicieli prywatnych
            w Wejherowie i okolicach. Stabilność, doświadczenie, lokalna wiedza.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt/" className="btn-primary">
              Zapytaj o ofertę
            </Link>
            <Link href="/oferta/" className="btn-ghost">
              Zobacz pełną ofertę
            </Link>
          </div>
        </div>
      </section>

      {/* LICZBY */}
      <section className="bg-white border-b border-neutral-200">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 py-16">
          {[
            { value: '30+', label: 'Lat doświadczenia' },
            { value: '500+', label: 'Zarządzanych lokali' },
            { value: '7', label: 'Obszarów obsługi' },
            { value: '24/7', label: 'Pogotowie lokatorskie' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-serif text-5xl md:text-6xl text-brand-red leading-none">
                {stat.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USŁUGI W SKRÓCIE */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="divider-red mb-5 block" />
            <h2 className="text-4xl md:text-5xl mb-5">Nasze usługi</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Pełne wsparcie administracyjne, księgowe i techniczne dla każdego
              typu nieruchomości — od jednorodzinnych po wielomieszkaniowe.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              {
                title: 'Wspólnoty mieszkaniowe',
                body: 'Kompleksowa obsługa administracyjna i księgowa. Prowadzenie zebrań, uchwały, sprawozdania.',
              },
              {
                title: 'Deweloperzy i osiedla',
                body: 'Zarządzanie nowymi inwestycjami — od odbioru technicznego po pełną obsługę bieżącą.',
              },
              {
                title: 'Właściciele prywatni',
                body: 'Obsługa pojedynczych lokali i kamienic. Najem, rozliczenia, sprawy formalne.',
              },
              {
                title: 'Sprawy techniczne',
                body: 'Przeglądy, remonty, koordynacja prac — z lokalnymi sprawdzonymi wykonawcami.',
              },
              {
                title: 'Strefa Mieszkańca',
                body: 'Internetowy dostęp do salda, uchwał, opłat i dokumentów wspólnoty 24/7.',
              },
              {
                title: 'Pogotowie lokatorskie',
                body: 'Reakcja na awarie przez całą dobę — bezpieczeństwo mieszkańców na pierwszym miejscu.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/oferta/"
              className="text-brand-red font-medium uppercase tracking-wider text-sm border-b border-brand-red pb-1 hover:text-brand-red-dark"
            >
              Pełna oferta →
            </Link>
          </div>
        </div>
      </section>

      {/* DLACZEGO MY */}
      <section className="section bg-white">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="divider-red mb-5 block" />
            <h2 className="text-4xl md:text-5xl mb-6">Dlaczego Biuro Checz'?</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Trzy dekady doświadczenia w jednym regionie to coś więcej niż liczba.
              To znajomość lokalnych realiów, sprawdzeni wykonawcy i relacje, których
              nie zbuduje się w rok.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                n: '01',
                t: 'Firma rodzinna z tradycją',
                d: 'Działamy nieprzerwanie od 1991 roku. Decyzje podejmujemy szybko i odpowiedzialnie.',
              },
              {
                n: '02',
                t: 'Lokalna ekspertyza',
                d: 'Znamy Wejherowo i okolice — urzędy, wykonawców, specyfikę osiedli.',
              },
              {
                n: '03',
                t: 'Doświadczony zespół',
                d: 'Zarządcy, księgowi i administratorzy — wszystko pod jednym dachem.',
              },
              {
                n: '04',
                t: 'Transparentność',
                d: 'Strefa Mieszkańca daje pełen wgląd w finanse i decyzje wspólnoty online.',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-5 border-b border-neutral-200 pb-6">
                <div className="font-serif text-3xl text-brand-red shrink-0 w-12">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-lg mb-1">{item.t}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink text-white">
        <div className="container-wide py-20 text-center">
          <span className="divider-red mb-6 inline-block" />
          <h2 className="text-3xl md:text-5xl mb-5">
            Powierz nam swoją nieruchomość
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-9">
            Zostaw zapytanie — odpowiemy w ciągu jednego dnia roboczego i przygotujemy
            indywidualną ofertę.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt/" className="btn-primary">
              Wyślij zapytanie
            </Link>
            <a href="tel:+48733398887" className="btn-ghost">
              Zadzwoń: +48 733 398 887
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
