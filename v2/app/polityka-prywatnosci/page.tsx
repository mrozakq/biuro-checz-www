import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import { SITE } from '@/lib/site'
import { t } from '@/lib/typo'

// Projekt informacji RODO do sprawdzenia przez klienta (m.in. pełne dane administratora, okresy przechowywania).

export const metadata: Metadata = {
  title: 'Ochrona danych osobowych (RODO)',
  description:
    'Informacja o przetwarzaniu danych osobowych przez Biuro Checz’ w Wejherowie: cele, podstawy prawne, okres przechowywania i prawa osób, których dane dotyczą.',
}

type Block = { h: string; p?: string[]; list?: string[] }

const BLOCKS: Block[] = [
  {
    h: 'W jakim celu i na jakiej podstawie przetwarzamy dane',
    list: [
      'aby odpowiedzieć na pytanie przesłane przez formularz na stronie, e-mailem lub zadane telefonicznie: na podstawie zgody (art. 6 ust. 1 lit. a RODO) oraz naszego prawnie uzasadnionego interesu, jakim jest prowadzenie korespondencji (art. 6 ust. 1 lit. f RODO),',
      'aby przygotować ofertę lub podjąć inne działania na Państwa prośbę przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).',
    ],
  },
  {
    h: 'Jakie dane zbieramy przez stronę',
    p: [
      'W formularzu kontaktowym prosimy o imię i nazwisko, adres e-mail oraz treść wiadomości. Numer telefonu można podać dobrowolnie. Podanie danych jest dobrowolne, ale bez adresu e-mail nie będziemy mogli odpowiedzieć na wiadomość.',
    ],
  },
  {
    h: 'Komu przekazujemy dane',
    p: [
      'Dane mogą być przekazywane wyłącznie firmom, które na nasze zlecenie obsługują stronę internetową, wysyłkę wiadomości z formularza i pocztę e-mail, w zakresie potrzebnym do świadczenia tych usług. Nie sprzedajemy danych i nie udostępniamy ich w celach marketingowych.',
    ],
  },
  {
    h: 'Jak długo przechowujemy dane',
    p: [
      'Dane z zapytań przechowujemy przez czas potrzebny do udzielenia odpowiedzi i prowadzenia korespondencji. Jeśli zawrzemy umowę, przechowujemy je przez okres jej obowiązywania oraz tak długo, jak wymagają tego przepisy, na przykład podatkowe i rachunkowe. Dane przetwarzane na podstawie zgody przechowujemy do czasu jej wycofania.',
    ],
  },
  {
    h: 'Jakie prawa Państwu przysługują',
    list: [
      'prawo dostępu do swoich danych i otrzymania ich kopii,',
      'prawo do sprostowania danych,',
      'prawo do usunięcia danych lub ograniczenia ich przetwarzania,',
      'prawo do przenoszenia danych,',
      'prawo do wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,',
      'prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania przed jej cofnięciem,',
      'prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.',
    ],
  },
  {
    h: 'Zautomatyzowane decyzje',
    p: ['Nie podejmujemy decyzji w sposób zautomatyzowany i nie profilujemy osób, które się z nami kontaktują.'],
  },
  {
    h: 'Pliki cookie i mapa Google',
    p: [
      'Strona nie korzysta z własnych plików cookie ani z narzędzi analitycznych. Na stronie głównej i w kontakcie wyświetlamy mapę Google. Przy jej wczytaniu Google może zapisać na urządzeniu swoje pliki cookie i otrzymuje adres IP, także na serwerach poza Europejskim Obszarem Gospodarczym. Zasady opisuje polityka prywatności Google: policies.google.com/privacy.',
      'Ikony Facebooka i Instagrama to zwykłe linki do naszych profili. Nie przekazują tym serwisom żadnych danych, dopóki Państwo w nie nie klikną.',
    ],
  },
  {
    h: 'Dane właścicieli i mieszkańców lokali',
    p: [
      'Informacje o przetwarzaniu danych w związku z zarządzaniem nieruchomością, rozliczeniami i opłatami przekazujemy w dokumentach, które otrzymują Państwo od biura, między innymi w drukach oświadczeń.',
    ],
  },
]

export default function PolitykaPrywatnosci() {
  return (
    <>
      <PageHead
        title="Ochrona danych osobowych"
        lead="Informacja o przetwarzaniu danych osobowych osób, które kontaktują się z nami przez stronę internetową, e-mail lub telefon."
      />

      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="border-2 border-ink bg-card p-6 lg:sticky lg:top-6">
            <p className="tag text-muted">Administrator danych</p>
            <p className="mt-3 font-semibold leading-snug">{SITE.legalName}</p>
            <p className="mt-2 leading-relaxed">
              {SITE.street}
              <br />
              {SITE.postal} {SITE.city}
            </p>
            <p className="mt-3 leading-relaxed">
              tel.{' '}
              <a href={SITE.phoneHref} className="font-semibold hover:text-red">
                {SITE.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="link">
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-[14px] leading-snug text-muted">
              {t('W sprawach dotyczących danych osobowych prosimy pisać na ten sam adres e-mail.')}
            </p>
          </div>
        </aside>

        <div className="space-y-10 lg:col-span-8">
          {BLOCKS.map((b) => (
            <section key={b.h} className="border-t-2 border-rule pt-6">
              <h2 className="cond-mid text-[26px] uppercase">{b.h}</h2>
              {b.p?.map((p) => (
                <p key={p} className="mt-3 text-[17px] leading-relaxed">
                  {t(p)}
                </p>
              ))}
              {b.list && (
                <ul className="square-list mt-4 space-y-2 text-[17px] leading-relaxed">
                  {b.list.map((li) => (
                    <li key={li}>{t(li)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="text-[14px] text-muted">Ostatnia aktualizacja: listopad 2026 r.</p>
        </div>
      </div>
    </>
  )
}
