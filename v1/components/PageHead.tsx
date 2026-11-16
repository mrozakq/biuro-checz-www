import Link from 'next/link'
import { t } from '@/lib/typo'

export default function PageHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="border-b border-line bg-paper">
      <div className="wrap py-10 md:py-14">
        <nav aria-label="Ścieżka" className="mb-4 text-[14px] text-muted">
          <Link href="/" className="hover:text-ink hover:underline">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{title}</span>
        </nav>
        <h1 className="text-[40px] md:text-[52px]">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-[19px] leading-relaxed text-muted">{t(lead)}</p>}
      </div>
    </div>
  )
}
