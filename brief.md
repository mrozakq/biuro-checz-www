\# brief.md — Biuro Checz' Strona WWW



slug: biuro-checz-www

warianty: 3



\## Co to za strona?

Typ: Firmowa strona WWW z podstronami

Branża: Zarządzanie nieruchomościami

Klient: Biuro Checz', od 1991, Wejherowo i okolice

Obecna strona: biurochecz.pl (przestarzała, do zastąpienia)



\## Cel strony

Pozyskać nowych klientów (wspólnoty mieszkaniowe, deweloperzy, właściciele prywatni),

zbudować zaufanie i wiarygodność, generować zapytania ofertowe przez formularz kontaktowy.



\## Dane kontaktowe (prawdziwe, użyj na stronie)

Adres: ul. Jana III Sobieskiego 223/4, Wejherowo

Infolinia: +48 733-398-887

Email: biuro@biurochecz.pl

Godziny: Pon 7:00-17:00, Śr 7:00-15:00, Pt 7:00-13:00

(Wt i Czw — dni pracy wewnętrznej, biuro nieczynne)



\## Logo

Logo: checz-logo.png dostępne w zlecenia/biuro-checz/checz-logo.png

Skopiuj je do zlecenia/biuro-checz-www/ jako checz-logo.png



\## Identyczność wizualna

Kolory marki: czerwony #CC0000, czarny #1a1a1a, biały

Charakter: profesjonalny, zaufany, firma z tradycją (od 1991), lokalny lider



\## Podstrony (każdy wariant musi je zawierać)

\- Strona główna (/)

\- O nas (/o-nas)

\- Oferta (/oferta)

\- Kontakt (/kontakt)



\## Treści — Strona główna

Hero: "Profesjonalne zarządzanie nieruchomościami od 1991 roku"

Podtytuł: "Obsługujemy wspólnoty mieszkaniowe, deweloperów i właścicieli prywatnych w Wejherowie i okolicach"

CTA: "Zapytaj o ofertę"

Liczby do pokazania: 30+ lat doświadczenia, setki zarządzanych lokali, kompleksowa obsługa

Sekcje: Hero, Liczby/statystyki, Usługi w skrócie, Dlaczego my, CTA kontaktowe



\## Treści — O nas

Firma rodzinna z tradycją od 1991 roku.

Działamy na terenie Wejherowa i okolic.

Zespół doświadczonych zarządców, księgowych i administratorów.

Internetowa Strefa Mieszkańca dla właścicieli lokali.



\## Treści — Oferta

1\. Kompleksowa obsługa administracyjna i księgowa wspólnot mieszkaniowych

2\. Zarządzanie nieruchomościami deweloperów i osiedli

3\. Obsługa właścicieli prywatnych i firm

4\. Prowadzenie spraw techniczno-organizacyjnych

5\. Ewidencja kosztów i opłat właścicieli lokali

6\. Internetowa Strefa Mieszkańca — dostęp online do salda, uchwał, opłat

7\. Pogotowie lokatorskie — obsługa awarii całą dobę



\## Treści — Kontakt

Formularz: imię, telefon, email, treść wiadomości, przycisk "Wyślij zapytanie"

Mapa lub adres tekstowy

Godziny otwarcia biura



\## Różnicowanie wariantów

v1 — klasyczny, ciemny header z czerwonym akcentem, tablicowy układ oferty, serif w nagłówkach

v2 — nowoczesny, jasny, karty z ikonami, dużo przestrzeni, sans-serif, subtelny czerwony

v3 — ciepły i lokalny, zdjęcia-placeholder budynków, sekcje z tłem, mieszana typografia



\## SEO

Główne słowo kluczowe: zarządzanie nieruchomościami Wejherowo

Frazy dodatkowe: zarządca wspólnoty mieszkaniowej Wejherowo, administrowanie nieruchomościami Trójmiasto

Meta description: Biuro Checz' — profesjonalne zarządzanie nieruchomościami w Wejherowie od 1991 roku. Obsługujemy wspólnoty mieszkaniowe, deweloperów i właścicieli prywatnych.

Język: polski



\## Rewizja 2 (16.11.2026), nadpisuje powyższe tam, gdzie się różni

Warianty: 2 (v1 klasyczny, v2 wyrazisty), poprzednie usunięte.

Podstrony: Strona główna, Oferta, Utrzymanie czystości (adres jak na starej stronie), Kontakt.

Usunąć: opinie, porady, podstronę „O nas”, newsletter, pomoc techniczną / pogotowie 24h.

Dodać: mapkę, formularz wysyłający na biuro@biurochecz.pl, wyróżniony link do tomojdom.pl w menu, przypinkę z FB i Instagramem.

Treści: można czerpać ze starej strony biurochecz.pl. Adresy działów: naliczenia@, rozliczenia@, techniczny@biurochecz.pl.

Styl: strona nie może wyglądać na zrobioną przez AI.

Profile: https://www.facebook.com/profile.php?id=100080105594508, https://www.instagram.com/biurochecz/



\## Status (16.11.2026)

Czekamy na wybór wariantu przez klienta. Do tego czasu nic nie wdrażamy.

Po wyborze: przenosiny z Amplify na S3 + CloudFront oraz nowy formularz (AWS Lambda + Amazon SES zamiast FormSubmit, który nie działa). Polityka uprawnień do tego: .aws-setup/contact-form-deployer-policy.json. Do decyzji: adres nadawcy powiadomień (formularz@emteq.pl albo formularz@biurochecz.pl, ten drugi wymaga rekordów DKIM w Cloudflare).



\## Rewizja 3 (25.11.2026): klient wybrał v2 (wyrazisty)

Uwagi klientki (SMS, zrzuty w Downloads/drive-download-20261125T101253Z-1-001.zip):

\- Wt i Czw nie „nieczynne”: biuro pracuje, dzień pracy wewnętrznej, bez obsługi klienta, tylko zgłoszenia awarii.

\- Adres: ul. Jana III Sobieskiego 223/5 (było 223/4).

\- Usunąć blok „Na start: audyt kosztów”.

\- W obsłudze prawnej usunąć „przygotowujemy statuty, regulaminy, umowy”.

\- Utrzymanie czystości: biuro tego nie świadczy. Zamiast podstrony krótka wzmianka o współpracy z firmami; klientka przyśle własne sformułowanie (na razie tekst tymczasowy w lib/content.ts, CLEANING_NOTE).

\- Dodać informację o RODO (podstrona /polityka-prywatnosci/, projekt do weryfikacji przez klienta).

\- Dodać druk „Oświadczenie o liczbie osób zamieszkałych w lokalu i o zaliczkach” (podstrona /dla-mieszkancow/, PDF i DOC). Uwaga: nagłówek druku ma stare dane (ul. Sobieskiego 280/3, tel. 058 672 22 29, biurochecz@wp.pl).

Wariant 1 usunięty z repo. Główny adres prototypu i /v1/ przekierowują na /v2/. Klientka ogląda zmiany na Amplify; S3 + CloudFront i formularz (Lambda + SES) dopiero po jej akceptacji.


