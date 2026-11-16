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

// Wizytówka Google: Checz Biuro usług turystycznych i administracji nieruchomościami
// (link od klienta: https://share.google/hveGm7kXlTZ3L2Kys)
export const MAP_PLACE_NAME = 'Checz Biuro usług turystycznych i administracji nieruchomościami'
export const MAP_PLACE_ID = 'ChIJsWTiRiy6_UYRNt0WpsPl30k'

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200!2d18.2366344!3d54.602356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdba2c46e264b1%3A0x49dfe5c3a616dd36!2sChecz%20Biuro%20us%C5%82ug%20turystycznych%20i%20administracji%20nieruchomo%C5%9Bciami!5e0!3m2!1spl!2spl!4v1763290000000!5m2!1spl!2spl'

export const MAP_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_PLACE_NAME)}&destination_place_id=${MAP_PLACE_ID}`
