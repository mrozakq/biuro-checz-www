import Image from 'next/image'

const variants = [
  {
    key: 'v1',
    name: 'Wariant 1: klasyczny',
    desc: 'Spokojny układ z szeryfowymi nagłówkami, białym tłem i czerwienią w detalach. Na stronie głównej zdjęcie ulicy Sobieskiego, oferta w formie czytelnej listy.',
    palette: ['#FFFFFF', '#1a1a1a', '#CC0000'],
    url: '/v1/',
  },
  {
    key: 'v2',
    name: 'Wariant 2: wyrazisty',
    desc: 'Wąskie, mocne nagłówki, ciepłe tło i duże czerwone bloki. Na górze strony aktualna informacja, czy biuro jest w tej chwili otwarte.',
    palette: ['#F2EEE6', '#141414', '#CC0000'],
    url: '/v2/',
  },
]

const changes = [
  'formularz kontaktowy wysyła wiadomość na biuro@biurochecz.pl',
  'mapa dojazdu i godziny pracy biura',
  'wyróżniony link do tomojdom.pl w menu',
  'przypinka z Facebookiem i Instagramem przy prawej krawędzi',
  'bez opinii, porad, newslettera, podstrony „O nas” i pomocy 24h',
]

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-5">
          <Image src="/checz-logo.png" alt="Biuro Checz’" width={386} height={360} className="h-[80px] w-auto" />
          <div className="border-l border-line pl-4 text-sm leading-tight">
            <div className="font-semibold">Nowa strona internetowa</div>
            <div className="text-muted">propozycje do wyboru</div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pb-10 pt-14">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-[44px] md:leading-[1.15]">
            Dwie propozycje strony dla Biura Checz’
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Obie wersje mają tę samą treść i te same podstrony: stronę główną, ofertę, utrzymanie czystości
            i&nbsp;kontakt. Różnią się wyglądem. Prosimy otworzyć każdą z nich, przejrzeć podstrony
            i&nbsp;wybrać tę, która lepiej pasuje do firmy.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <div className="grid gap-6 md:grid-cols-2">
            {variants.map((v) => (
              <a
                key={v.key}
                href={v.url}
                className="group flex flex-col border border-line bg-white p-7 transition-colors hover:border-ink"
              >
                <div className="mb-6 flex gap-1.5">
                  {v.palette.map((c) => (
                    <span
                      key={c}
                      className="h-6 w-10 border border-line"
                      style={{ backgroundColor: c }}
                      aria-hidden
                    />
                  ))}
                </div>
                <h2 className="mb-3 text-2xl font-semibold group-hover:text-[#CC0000]">{v.name}</h2>
                <p className="mb-8 flex-1 leading-relaxed text-muted">{v.desc}</p>
                <span className="border-t border-line pt-4 text-sm font-semibold">
                  Otwórz {v.key === 'v1' ? 'wariant 1' : 'wariant 2'} →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="border-t border-line pt-8">
            <h2 className="mb-3 font-semibold">W obu wersjach</h2>
            <ul className="grid gap-x-10 gap-y-1.5 text-muted md:grid-cols-2">
              {changes.map((c) => (
                <li key={c} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-[#CC0000]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5 text-xs text-muted">
          Materiał roboczy do wyboru wariantu, strona nie jest indeksowana w wyszukiwarkach.
        </div>
      </footer>
    </div>
  )
}
