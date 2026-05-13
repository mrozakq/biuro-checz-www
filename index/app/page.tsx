import Image from 'next/image'

const variants = [
  {
    key: 'v1',
    name: 'Wariant 1 — Klasyczny',
    desc: 'Ciemny header z czerwonym akcentem, serif w nagłówkach, tablicowy układ oferty. Profesjonalny i zaufany — firma z tradycją.',
    palette: ['#1a1a1a', '#CC0000', '#FFFFFF'],
    type: 'Klasyczny',
    url: '/v1/',
  },
  {
    key: 'v2',
    name: 'Wariant 2 — Nowoczesny',
    desc: 'Jasny, lekki layout z kartami, ikonami i zaokrąglonymi formami. Subtelny czerwony akcent, sans-serif, sporo przestrzeni.',
    palette: ['#FFFFFF', '#CC0000', '#0F172A'],
    type: 'Nowoczesny',
    url: '/v2/',
  },
]

export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/checz-logo.png"
              alt="Biuro Checz'"
              width={36}
              height={36}
              className="rounded"
            />
            <div className="leading-tight">
              <div className="font-semibold text-sm">Biuro Checz'</div>
              <div className="text-xs text-muted">Prototypy WWW</div>
            </div>
          </div>
          <div className="text-xs text-muted hidden sm:block">
            Wewnętrzny wybór wariantu · nie indeksowane
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
            Zlecenie · biuro-checz-www
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 max-w-3xl">
            Wybierz wariant prototypu strony WWW
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Dwa kierunki wizualne dla nowej strony Biuro Checz'. Otwórz wariant,
            kliknij przez podstrony i wybierz ten, który najlepiej oddaje charakter firmy.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((v) => (
              <a
                key={v.key}
                href={v.url}
                className="group bg-white border border-line rounded-2xl p-7 hover:border-ink transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {v.type}
                  </span>
                  <div className="flex gap-1.5">
                    {v.palette.map((c) => (
                      <span
                        key={c}
                        className="w-5 h-5 rounded-full border border-line"
                        style={{ backgroundColor: c }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 group-hover:text-[#CC0000] transition-colors">
                  {v.name}
                </h2>
                <p className="text-muted leading-relaxed mb-8 flex-1">{v.desc}</p>

                <div className="flex items-center justify-between border-t border-line pt-5">
                  <span className="text-sm font-medium">Otwórz wariant</span>
                  <span className="w-9 h-9 rounded-full border border-line grid place-items-center group-hover:bg-ink group-hover:border-ink group-hover:text-white transition-all">
                    →
                  </span>
                </div>

              </a>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="border-t border-line pt-10 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-semibold mb-2">Klient</div>
              <p className="text-muted">
                Biuro Checz' · Zarządzanie nieruchomościami<br />
                Wejherowo, od 1991 roku
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Stos</div>
              <p className="text-muted">
                Next.js 14 · App Router · SSG export<br />
                TypeScript · Tailwind CSS
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Status</div>
              <p className="text-muted">
                Prototypy do akceptacji.<br />
                Po wyborze — produkcja na biurochecz.pl.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Biuro Checz' · Materiał wewnętrzny
        </div>
      </footer>
    </div>
  )
}
