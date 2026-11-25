// Treści przeredagowane na podstawie dotychczasowej strony biurochecz.pl.

export const GROUPS = [
  {
    title: 'Wspólnoty mieszkaniowe',
    text: 'Prowadzimy administrację i księgowość wspólnoty, przygotowujemy zebrania i uchwały, pilnujemy stanu technicznego budynku oraz rozliczeń z właścicielami lokali.',
  },
  {
    title: 'Deweloperzy i osiedla',
    text: 'Przejmujemy zarządzanie budynkami i osiedlami oddawanymi do użytku, zarówno na zlecenie dewelopera, jak i wspólnoty, która powstaje po sprzedaży lokali.',
  },
  {
    title: 'Właściciele, firmy i instytucje',
    text: 'Administrujemy lokalami mieszkalnymi i użytkowymi oraz obiektami komercyjnymi. Zakres obsługi ustalamy indywidualnie z właścicielem.',
  },
]

export const SERVICES = [
  {
    id: 'administracja',
    title: 'Zarządzanie i administracja',
    short:
      'Prowadzimy sprawy techniczno-organizacyjne nieruchomości, organizujemy zebrania i przygotowujemy projekty uchwał.',
    text: 'Przejmujemy bieżące sprawy nieruchomości, tak aby zarząd wspólnoty i właściciele nie musieli zajmować się codzienną organizacją.',
    items: [
      'prowadzenie spraw techniczno-organizacyjnych nieruchomości',
      'organizacja zebrań i przygotowanie projektów uchwał',
      'prowadzenie dokumentacji nieruchomości',
      'umowy z dostawcami mediów i firmami obsługującymi budynek',
    ],
  },
  {
    id: 'ksiegowosc',
    title: 'Księgowość i rozliczenia',
    short:
      'Prowadzimy ewidencję kosztów zarządu nieruchomością wspólną oraz ewidencję opłat wnoszonych przez właścicieli lokali.',
    text: 'Dbamy o to, żeby finanse wspólnoty były uporządkowane, a każdy właściciel wiedział, z czego wynikają jego opłaty.',
    items: [
      'ewidencja kosztów zarządu nieruchomością wspólną',
      'ewidencja opłat wnoszonych przez właścicieli lokali',
      'naliczenia opłat i rozliczenia mediów',
      'roczne sprawozdania dla wspólnoty',
    ],
  },
  {
    id: 'technika',
    title: 'Obsługa techniczna',
    short:
      'Organizujemy kontrole okresowe, konserwacje i remonty. Zbieramy oferty, nadzorujemy prace i uczestniczymy w odbiorach.',
    text: 'Pilnujemy terminów przeglądów i stanu budynku. Przy remontach zajmujemy się całą organizacją, od zapytania ofertowego do odbioru prac.',
    items: [
      'organizowanie kontroli okresowych budynku i instalacji',
      'roboty konserwacyjne i remontowe',
      'przygotowywanie zapytań ofertowych do wykonawców',
      'nadzór nad przebiegiem prac i odbiory',
      'zapewnienie inspektora nadzoru budowlanego',
    ],
  },
  {
    id: 'prawo',
    title: 'Obsługa prawna wspólnoty',
    short: 'Na bieżąco doradzamy w sprawach prawnych: oceniamy sytuację i rekomendujemy dalsze kroki.',
    text: 'Gdy pojawia się problem, wstępnie oceniamy go od strony prawnej i proponujemy, jak wspólnota powinna dalej postąpić.',
    items: [],
  },
  {
    id: 'windykacja',
    title: 'Windykacja należności',
    short: 'Stale monitorujemy zadłużenie lokali i regularnie prowadzimy działania windykacyjne.',
    text: 'Zaległości w opłatach obciążają wszystkich właścicieli. Dlatego na bieżąco sprawdzamy stan zadłużenia lokali i reagujemy, zanim kwoty urosną.',
    items: [],
  },
]

export const TOMOJDOM_TEXT =
  'Właściciele lokali w budynkach, którymi zarządzamy, mają dostęp do internetowej kartoteki w serwisie tomojdom.pl. Po zalogowaniu można sprawdzić aktualną wysokość i składniki opłat (eksploatacja, media, fundusz remontowy) oraz stan rozliczeń ze wspólnotą, w tym zaksięgowane wpłaty.'

// Krótka wzmianka zamiast osobnej podstrony: biuro samo nie sprząta, współpracuje z firmami.
// Klientka obiecała własne sformułowanie, to jest tekst tymczasowy.
export const CLEANING_NOTE = 'Współpracujemy z firmami, które świadczą usługi utrzymania czystości w budynkach.'
