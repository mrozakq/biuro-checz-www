'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '@/assets/checz-logo.png'
import { SITE } from '@/lib/site'
import { ExternalIcon } from './icons'

const NAV = [
  { href: '/', label: 'Strona główna' },
  { href: '/oferta/', label: 'Oferta' },
  { href: '/utrzymanie-czystosci/', label: 'Utrzymanie czystości' },
  { href: '/kontakt/', label: 'Kontakt' },
]

const norm = (p: string) => p.replace(/\/$/, '') || '/'

export default function Header() {
  const pathname = norm(usePathname() || '/')
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 bg-white">
      <div className="bg-ink text-[14px] text-white/80">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
          <span className="hidden sm:inline">
            {SITE.street}, {SITE.postal} {SITE.city}
          </span>
          <span className="hidden lg:inline">
            Biuro czynne: pon. 7:00–17:00, śr. 7:00–15:00, pt. 7:00–13:00
          </span>
          <span className="flex gap-5">
            <a href={SITE.phoneHref} className="text-white hover:underline">
              tel. {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden hover:underline sm:inline">
              {SITE.email}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="wrap flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex shrink-0 items-center gap-4" onClick={() => setOpen(false)}>
            <Image src={logo} alt="Biuro Checz’, od 1991" className="h-[76px] w-auto md:h-[100px]" priority />
            <span className="hidden border-l border-line pl-4 text-[14px] leading-snug text-muted xl:block">
              Zarządzanie i administrowanie
              <br />
              nieruchomościami w Wejherowie
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu główne">
            {NAV.map((item) => {
              const active = pathname === norm(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b-2 py-1 text-[16px] font-semibold transition-colors ${
                    active ? 'border-red text-ink' : 'border-transparent text-ink/75 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <TomojdomButton />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE.tomojdom}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 bg-red px-3 py-2 text-[14px] font-semibold text-white"
              style={{ borderRadius: 2 }}
            >
              tomojdom.pl <ExternalIcon className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="border border-ink px-3 py-2 text-[14px] font-semibold"
              style={{ borderRadius: 2 }}
            >
              {open ? 'Zamknij' : 'Menu'}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" className="border-t border-line lg:hidden" aria-label="Menu główne">
            <ul className="wrap py-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-line py-3 text-[17px] font-semibold last:border-0 ${
                      pathname === norm(item.href) ? 'text-red' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

function TomojdomButton() {
  return (
    <a
      href={SITE.tomojdom}
      target="_blank"
      rel="noopener"
      className="group ml-1 flex items-center gap-3 bg-red py-2 pl-4 pr-3 text-white transition-colors hover:bg-red-dark"
      style={{ borderRadius: 2 }}
    >
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold">Strefa mieszkańca</span>
        <span className="block text-[13px] text-white/85">tomojdom.pl</span>
      </span>
      <ExternalIcon className="h-4 w-4 opacity-80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}
