'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '@/assets/checz-logo.png'
import { SITE } from '@/lib/site'
import OfficeStatus from './OfficeStatus'
import { ExternalIcon } from './icons'

const NAV = [
  { href: '/oferta/', label: 'Oferta' },
  { href: '/dla-mieszkancow/', label: 'Dla mieszkańców' },
  { href: '/kontakt/', label: 'Kontakt' },
]

const norm = (p: string) => p.replace(/\/$/, '') || '/'

export default function Header() {
  const pathname = norm(usePathname() || '/')
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="bg-red text-[14px] text-white">
        <div className="wrap flex items-center justify-between gap-4 py-2">
          <OfficeStatus />
          <span className="hidden gap-6 sm:flex">
            <a href={SITE.phoneHref} className="font-semibold hover:underline">
              {SITE.phoneFull}
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden hover:underline md:inline">
              {SITE.email}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b-2 border-rule bg-paper">
        <div className="wrap flex items-stretch justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center py-2.5" onClick={() => setOpen(false)}>
            <Image src={logo} alt="Biuro Checz’, od 1991" className="h-[76px] w-auto md:h-[100px]" priority />
          </Link>

          <nav className="hidden items-stretch lg:flex" aria-label="Menu główne">
            {NAV.map((item) => {
              const active = pathname === norm(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`cond-mid flex items-center px-5 text-[17px] uppercase tracking-[0.04em] transition-colors ${
                    active ? 'text-red' : 'hover:text-red'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href={SITE.tomojdom}
              target="_blank"
              rel="noopener"
              className="group ml-4 flex items-center gap-4 bg-ink px-6 text-white transition-colors hover:bg-red"
            >
              <span className="leading-none">
                <span className="tag block text-[11px] text-white/70 group-hover:text-white">e-Kartoteka</span>
                <span className="cond mt-1 block text-[26px] lowercase">tomojdom.pl</span>
              </span>
              <ExternalIcon className="h-5 w-5" />
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE.tomojdom}
              target="_blank"
              rel="noopener"
              className="cond-mid inline-flex items-center gap-1.5 bg-ink px-3 py-2.5 text-[16px] text-white"
            >
              tomojdom.pl <ExternalIcon className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="cond-mid border-2 border-ink px-3 py-2 text-[16px] uppercase"
            >
              {open ? 'Zamknij' : 'Menu'}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" className="border-t-2 border-rule lg:hidden" aria-label="Menu główne">
            <ul className="wrap">
              {[{ href: '/', label: 'Strona główna' }, ...NAV].map((item) => (
                <li key={item.href} className="border-b border-ink/15 last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`cond-mid block py-3.5 text-[22px] uppercase ${
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
