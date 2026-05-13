import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas/', label: 'O nas' },
  { href: '/oferta/', label: 'Oferta' },
  { href: '/kontakt/', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-brand-line">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white rounded-xl shadow-card p-1.5">
            <Image
              src="/checz-logo.png"
              alt="Biuro Checz'"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg">Biuro Checz'</div>
            <div className="text-[11px] text-brand-slate">od 1991 · Wejherowo</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 bg-brand-bg rounded-full p-1.5 border border-brand-line">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink px-4 py-2 rounded-full hover:bg-white hover:shadow-card transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/kontakt/" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Zapytaj o ofertę
        </Link>
      </div>

      <nav className="lg:hidden border-t border-brand-line bg-white">
        <div className="container-wide flex flex-wrap gap-x-5 gap-y-2 py-3 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-slate hover:text-brand-red font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
