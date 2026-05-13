import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/80 mt-20">
      <div className="container-wide grid md:grid-cols-3 gap-10 py-14">
        <div>
          <div className="font-serif text-2xl text-white mb-3">Biuro Checz'</div>
          <span className="divider-red mb-4" />
          <p className="text-sm leading-relaxed">
            Zarządzanie nieruchomościami w Wejherowie i okolicach od 1991 roku.
            Wspólnoty mieszkaniowe, deweloperzy, właściciele prywatni.
          </p>
        </div>
        <div>
          <div className="text-white text-sm uppercase tracking-wider mb-3">
            Kontakt
          </div>
          <ul className="space-y-2 text-sm">
            <li>ul. Jana III Sobieskiego 223/4, Wejherowo</li>
            <li>
              <a href="tel:+48733398887" className="hover:text-brand-red">
                +48 733 398 887
              </a>
            </li>
            <li>
              <a
                href="mailto:biuro@biurochecz.pl"
                className="hover:text-brand-red"
              >
                biuro@biurochecz.pl
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white text-sm uppercase tracking-wider mb-3">
            Godziny otwarcia
          </div>
          <ul className="space-y-1 text-sm">
            <li>Poniedziałek: 7:00 – 17:00</li>
            <li>Środa: 7:00 – 15:00</li>
            <li>Piątek: 7:00 – 13:00</li>
            <li className="text-white/50">Wtorek, Czwartek — biuro nieczynne</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between py-5 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Biuro Checz'. Wszelkie prawa zastrzeżone.</span>
          <div className="flex gap-5 mt-2 md:mt-0">
            <Link href="/o-nas/" className="hover:text-white">O nas</Link>
            <Link href="/oferta/" className="hover:text-white">Oferta</Link>
            <Link href="/kontakt/" className="hover:text-white">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
