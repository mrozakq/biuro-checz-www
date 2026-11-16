export const SITE = {
  name: 'Biuro Checz’',
  url: 'https://biurochecz.pl',
  street: 'ul. Jana III Sobieskiego 223/4',
  postal: '84-200',
  city: 'Wejherowo',
  phoneDisplay: '733 398 887',
  phoneFull: '+48 733 398 887',
  phoneHref: 'tel:+48733398887',
  email: 'biuro@biurochecz.pl',
  tomojdom: 'https://tomojdom.pl/',
  facebook: 'https://www.facebook.com/profile.php?id=100080105594508',
  instagram: 'https://www.instagram.com/biurochecz/',
  // Formularz wysyła wiadomość na biuro@biurochecz.pl przez FormSubmit.
  // Pierwsze zgłoszenie wymaga jednorazowej aktywacji linkiem z maila.
  formEndpoint: 'https://formsubmit.co/ajax/biuro@biurochecz.pl',
}

export type OfficeDay = { day: string; open: string | null; close: string | null }

export const HOURS: OfficeDay[] = [
  { day: 'Poniedziałek', open: '7:00', close: '17:00' },
  { day: 'Wtorek', open: null, close: null },
  { day: 'Środa', open: '7:00', close: '15:00' },
  { day: 'Czwartek', open: null, close: null },
  { day: 'Piątek', open: '7:00', close: '13:00' },
]

export const EMAILS = [
  { label: 'Sprawy ogólne', email: 'biuro@biurochecz.pl' },
  { label: 'Naliczenia opłat', email: 'naliczenia@biurochecz.pl' },
  { label: 'Rozliczenia', email: 'rozliczenia@biurochecz.pl' },
  { label: 'Sprawy techniczne', email: 'techniczny@biurochecz.pl' },
]

export const MAP_EMBED =
  'https://maps.google.com/maps?q=Jana%20III%20Sobieskiego%20223%2F4%2C%2084-200%20Wejherowo&t=m&z=16&output=embed&iwloc=near'

export const MAP_ROUTE =
  'https://www.google.com/maps/dir/?api=1&destination=Jana+III+Sobieskiego+223%2F4%2C+84-200+Wejherowo'
