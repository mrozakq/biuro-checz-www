import { HOURS } from '@/lib/site'

export default function Hours({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <table className="w-full text-[16px]">
        <tbody>
          {HOURS.map((h) => (
            <tr key={h.day} className={`border-b last:border-0 ${dark ? 'border-white/15' : 'border-line'}`}>
              <th scope="row" className="py-2 pr-4 text-left font-normal">
                {h.day}
              </th>
              <td
                className={`py-2 text-right tabular-nums ${
                  h.open ? 'font-semibold' : dark ? 'text-white/55' : 'text-muted'
                }`}
              >
                {h.open ? `${h.open}–${h.close}` : 'nieczynne'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={`mt-3 text-[14px] ${dark ? 'text-white/60' : 'text-muted'}`}>
        We wtorki i czwartki pracujemy wewnętrznie, biuro jest wtedy zamknięte dla klientów.
      </p>
    </div>
  )
}
