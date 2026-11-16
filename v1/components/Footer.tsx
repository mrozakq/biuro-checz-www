import Link from 'next/link'
import { SITE } from '@/lib/site'
import Hours from './Hours'

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="wrap grid gap-10 py-14 text-[15px] md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-serif text-[26px] text-white">Biuro Checz’</p>
          <p className="mt-2 max-w-xs leading-relaxed">
            Zarządzanie i administrowanie nieruchomościami w Wejherowie i okolicach od 1991 roku.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="mb-3 font-semibold text-white">Kontakt</p>
          <p>
            {SITE.street}
            <br />
            {SITE.postal} {SITE.city}
          </p>
          <p className="mt-3">
            <a href={SITE.phoneHref} className="hover:text-white">
              tel. {SITE.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="mb-1 font-semibold text-white">Godziny pracy biura</p>
          <Hours dark />
        </div>

        <div className="md:col-span-2">
          <p className="mb-3 font-semibold text-white">Na skróty</p>
          <ul className="space-y-1.5">
            <li>
              <Link href="/oferta/" className="hover:text-white">
                Oferta
              </Link>
            </li>
            <li>
              <Link href="/utrzymanie-czystosci/" className="hover:text-white">
                Utrzymanie czystości
              </Link>
            </li>
            <li>
              <Link href="/kontakt/" className="hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <a href={SITE.tomojdom} target="_blank" rel="noopener" className="text-white hover:underline">
                tomojdom.pl
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-[13px] text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Biuro Checz’, Wejherowo</span>
          <span>
            Realizacja i nadzór nad stroną:{' '}
            <a href="https://emteq.pl" target="_blank" rel="noopener" className="text-white/80 underline-offset-4 hover:text-white hover:underline">
              emTeq
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
