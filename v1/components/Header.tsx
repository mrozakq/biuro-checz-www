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
    <header className="bg-brand-ink text-white border-b-2 border-brand-red">
      <div className="container-wide flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/checz-logo.png"
            alt="Biuro Checz'"
            width={48}
            height={48}
            className="rounded-sm bg-white p-1"
          />
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-wide">Biuro Checz'</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">
              Zarządzanie nieruchomościami
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-wider text-white/85 hover:text-brand-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+48733398887"
            className="bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-medium tracking-wide"
          >
            +48 733 398 887
          </a>
        </nav>
      </div>
      <nav className="md:hidden border-t border-white/10">
        <div className="container-wide flex flex-wrap gap-x-5 gap-y-2 py-3 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
