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
    short:
      'Na bieżąco doradzamy w sprawach prawnych: oceniamy sytuację i rekomendujemy dalsze kroki. Przygotowujemy statuty, regulaminy i umowy.',
    text: 'Gdy pojawia się problem, wstępnie oceniamy go od strony prawnej i proponujemy, jak wspólnota powinna dalej postąpić. Przygotowujemy też dokumenty, których wspólnota potrzebuje na co dzień.',
    items: [
      'statuty wspólnot mieszkaniowych',
      'regulaminy porządku domowego',
      'regulaminy rozliczania mediów',
      'umowy potrzebne do prawidłowego funkcjonowania wspólnoty',
      'inne dokumenty regulujące sprawy wewnętrzne wspólnoty',
    ],
  },
  {
    id: 'windykacja',
    title: 'Windykacja należności',
    short: 'Stale monitorujemy zadłużenie lokali i regularnie prowadzimy działania windykacyjne.',
    text: 'Zaległości w opłatach obciążają wszystkich właścicieli. Dlatego na bieżąco sprawdzamy stan zadłużenia lokali i reagujemy, zanim kwoty urosną.',
    items: [],
  },
]

export const AUDIT =
  'Na początku współpracy sprawdzamy koszty utrzymania nieruchomości i wskazujemy, gdzie można je obniżyć. Mniejsze koszty zarządu to niższe opłaty dla właścicieli lokali.'

export const TOMOJDOM_TEXT =
  'Właściciele lokali w budynkach, którymi zarządzamy, mają dostęp do internetowej kartoteki w serwisie tomojdom.pl. Po zalogowaniu można sprawdzić aktualną wysokość i składniki opłat (eksploatacja, media, fundusz remontowy) oraz stan rozliczeń ze wspólnotą, w tym zaksięgowane wpłaty.'

export const CLEANING = [
  {
    title: 'Bieżące sprzątanie klatek schodowych',
    text: 'Zamiatanie i mycie podłóg oraz schodów, ścieranie kurzu z poręczy, parapetów i skrzynek pocztowych, mycie luster i przeszkleń.',
  },
  {
    title: 'Drzwi wejściowe i okna',
    text: 'Mycie drzwi wejściowych do budynku i okien na klatkach, usuwanie plam i odcisków palców z szyb.',
  },
  {
    title: 'Pojemniki na śmieci',
    text: 'Regularne opróżnianie koszy w częściach wspólnych, żeby na klatce było czysto i nie pojawiały się nieprzyjemne zapachy.',
  },
  {
    title: 'Piwnice i pomieszczenia techniczne',
    text: 'Utrzymanie porządku w piwnicach, suszarniach, wózkowniach i innych pomieszczeniach wspólnych.',
  },
  {
    title: 'Zgłaszanie usterek',
    text: 'Osoby sprzątające na bieżąco sprawdzają stan klatki i zgłaszają usterki, na przykład niedziałające oświetlenie albo uszkodzone wyposażenie.',
  },
]
