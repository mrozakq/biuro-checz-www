import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-line mt-20">
      <div className="container-wide grid md:grid-cols-4 gap-10 py-16">
        <div className="md:col-span-2">
          <div className="font-bold text-xl mb-2">Biuro Checz'</div>
          <p className="text-brand-slate leading-relaxed max-w-md">
            Zarządzanie nieruchomościami w Wejherowie i okolicach od 1991 roku.
            Wspólnoty mieszkaniowe, deweloperzy, właściciele prywatni.
          </p>
        </div>
        <div>
          <div className="font-semibold text-sm mb-4 text-brand-ink">Kontakt</div>
          <ul className="space-y-2 text-sm text-brand-slate">
            <li>ul. Sobieskiego 223/4<br />Wejherowo</li>
            <li>
              <a href="tel:+48733398887" className="hover:text-brand-red">
                +48 733 398 887
              </a>
            </li>
            <li>
              <a href="mailto:biuro@biurochecz.pl" className="hover:text-brand-red">
                biuro@biurochecz.pl
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-sm mb-4 text-brand-ink">Godziny</div>
          <ul className="space-y-1 text-sm text-brand-slate">
            <li>Pon: 7:00–17:00</li>
            <li>Śr: 7:00–15:00</li>
            <li>Pt: 7:00–13:00</li>
            <li className="text-brand-slate/60">Wt, Czw — nieczynne</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-line">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between py-5 text-xs text-brand-slate">
          <span>© {new Date().getFullYear()} Biuro Checz'. Wszelkie prawa zastrzeżone.</span>
          <div className="flex gap-5 mt-2 md:mt-0">
            <Link href="/o-nas/" className="hover:text-brand-red">O nas</Link>
            <Link href="/oferta/" className="hover:text-brand-red">Oferta</Link>
            <Link href="/kontakt/" className="hover:text-brand-red">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
