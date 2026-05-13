import Link from 'next/link'
import Icon from '@/components/Icon'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-red-tint via-white to-white" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-red/8 blur-3xl -z-10" />
        <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-6">Od 1991 roku · Wejherowo</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Profesjonalne <span className="text-brand-red">zarządzanie</span> nieruchomościami od 1991 roku
            </h1>
            <p className="mt-7 text-xl text-brand-slate leading-relaxed max-w-2xl">
              Obsługujemy wspólnoty mieszkaniowe, deweloperów i właścicieli prywatnych
              w Wejherowie i okolicach.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/kontakt/" className="btn-primary">
                Zapytaj o ofertę <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link href="/oferta/" className="btn-secondary">
                Pełna oferta
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-brand-slate">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-brand-red/90 text-white grid place-items-center font-semibold text-xs">30+</div>
                <div className="w-9 h-9 rounded-full bg-brand-ink text-white grid place-items-center font-semibold text-xs">PL</div>
                <div className="w-9 h-9 rounded-full bg-white border border-brand-line text-brand-ink grid place-items-center font-semibold text-xs">🛡</div>
              </div>
              <span>Trzy dekady. Setki obsłużonych lokali. Jeden zaufany partner.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-card p-8 border border-brand-line">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs uppercase tracking-wider text-brand-slate">
                    Strefa Mieszkańca
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
                </div>
                <div className="text-sm text-brand-slate mb-2">Saldo bieżące</div>
                <div className="text-4xl font-bold mb-6">412,80 zł</div>
                <div className="space-y-3">
                  {[
                    { t: 'Zaliczka eksploatacyjna', v: '+ 280,00' },
                    { t: 'Fundusz remontowy', v: '+ 120,00' },
                    { t: 'Media — rozliczenie', v: '+ 12,80' },
                  ].map((r) => (
                    <div
                      key={r.t}
                      className="flex justify-between items-center border-b border-brand-line pb-3"
                    >
                      <span className="text-sm">{r.t}</span>
                      <span className="text-sm font-semibold text-brand-red">{r.v}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-brand-ink text-white rounded-xl py-3 font-semibold text-sm">
                  Zobacz uchwały (3)
                </button>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white rounded-2xl p-5 shadow-soft max-w-[220px] hidden md:block">
                <Icon name="alert" className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold leading-snug">
                  Pogotowie lokatorskie 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-wide -mt-8 mb-20 relative">
        <div className="bg-brand-ink text-white rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-soft">
          {[
            { v: '30+', l: 'Lat doświadczenia' },
            { v: '500+', l: 'Zarządzanych lokali' },
            { v: '7', l: 'Obszarów obsługi' },
            { v: '24/7', l: 'Pogotowie' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-bold text-brand-red">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USŁUGI */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Nasze usługi</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Wszystko, co potrzebne do spokojnego zarządzania nieruchomością
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Administracja, księgowość, sprawy techniczne i obsługa awarii — pod jednym dachem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: 'building', t: 'Wspólnoty mieszkaniowe', d: 'Pełna obsługa administracyjna i księgowa, prowadzenie zebrań i uchwał.' },
              { i: 'layers', t: 'Deweloperzy i osiedla', d: 'Od odbioru technicznego po pełną obsługę bieżącą nowych inwestycji.' },
              { i: 'user', t: 'Właściciele prywatni', d: 'Pojedyncze lokale, kamienice i nieruchomości komercyjne — kompleksowo.' },
              { i: 'tool', t: 'Sprawy techniczne', d: 'Przeglądy, remonty, koordynacja prac ze sprawdzonymi wykonawcami.' },
              { i: 'monitor', t: 'Strefa Mieszkańca', d: 'Internetowy dostęp do salda, uchwał i dokumentów 24 godziny na dobę.' },
              { i: 'alert', t: 'Pogotowie 24/7', d: 'Reakcja na awarie przez całą dobę — bezpieczeństwo mieszkańców.' },
            ].map((c) => (
              <div key={c.t} className="card group">
                <div className="w-12 h-12 rounded-xl bg-brand-red-soft text-brand-red grid place-items-center mb-5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Icon name={c.i as 'building'} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-brand-slate leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/oferta/" className="btn-secondary">
              Zobacz pełną ofertę <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DLACZEGO MY */}
      <section className="section bg-brand-bg">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow mb-4">Dlaczego my</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Lokalna wiedza i trzy dekady doświadczenia
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Działamy w jednym regionie nieprzerwanie od 1991 roku. Znamy urzędy,
              wykonawców i specyfikę osiedli — to przewaga, której nie zbuduje się szybko.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Firma rodzinna', d: 'Działamy od 1991 roku — szybkie i odpowiedzialne decyzje.' },
              { t: 'Lokalna ekspertyza', d: 'Znamy Wejherowo, urzędy i sprawdzonych wykonawców.' },
              { t: 'Doświadczony zespół', d: 'Zarządcy, księgowi i administratorzy w jednym biurze.' },
              { t: 'Transparentność', d: 'Pełny wgląd w finanse online — w każdej chwili.' },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-2xl border border-brand-line p-6">
                <div className="w-9 h-9 rounded-lg bg-brand-red text-white grid place-items-center mb-4">
                  <Icon name="check" className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1">{c.t}</h3>
                <p className="text-sm text-brand-slate leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-brand-ink text-white p-10 md:p-16 text-center">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-red/30 rounded-full blur-3xl" />
            <span className="eyebrow !text-brand-red/90 mb-4 inline-flex">Gotowi, by zacząć?</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Powierz nam swoją nieruchomość
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-9">
              Odpowiadamy w ciągu jednego dnia roboczego i przygotowujemy indywidualną ofertę.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kontakt/" className="btn-primary">
                Wyślij zapytanie <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <a href="tel:+48733398887" className="btn-secondary !bg-white/10 !border-white/20 !text-white">
                <Icon name="phone" className="w-4 h-4" /> +48 733 398 887
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
