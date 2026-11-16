import { t } from '@/lib/typo'

export default function PageHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="border-b-2 border-rule">
      <div className="wrap grid items-end gap-6 pb-10 pt-12 md:grid-cols-12 md:pb-14 md:pt-16">
        <h1 className="cond text-[56px] uppercase md:col-span-7 md:text-[92px]">{title}</h1>
        {lead && <p className="text-[18px] leading-relaxed text-muted md:col-span-5 md:pb-2">{t(lead)}</p>}
      </div>
    </div>
  )
}
