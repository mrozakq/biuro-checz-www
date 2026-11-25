import { HOURS, INTERNAL_DAYS_NOTE } from '@/lib/site'

export default function Hours({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <ul>
        {HOURS.map((h) => (
          <li
            key={h.day}
            className={`flex items-baseline justify-between gap-4 border-b py-2 last:border-0 ${
              dark ? 'border-white/20' : 'border-ink/20'
            }`}
          >
            <span className={h.open ? '' : dark ? 'text-white/60' : 'text-muted'}>{h.day}</span>
            <span
              className={`text-right tabular-nums ${h.open ? 'font-semibold' : dark ? 'text-white/60' : 'text-muted'}`}
            >
              {h.open ? `${h.open}–${h.close}` : 'bez obsługi klienta'}
            </span>
          </li>
        ))}
      </ul>
      <p className={`mt-3 text-[14px] leading-snug ${dark ? 'text-white/60' : 'text-muted'}`}>{INTERNAL_DAYS_NOTE}</p>
    </div>
  )
}
