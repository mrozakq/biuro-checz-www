'use client'

import { useEffect, useState } from 'react'

// Godziny obsługi klienta: dzień tygodnia (0 = niedziela) -> [od, do]
const OPEN: Record<number, [number, number]> = { 1: [7, 17], 3: [7, 15], 5: [7, 13] }
// Wtorek i czwartek: dzień pracy wewnętrznej, tylko zgłoszenia awarii
const INTERNAL = new Set([2, 4])
const DAY_ACC = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę']
const WD: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

function warsawNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '0'
  return { day: WD[get('weekday')], minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export function getStatus(): { open: boolean; text: string } {
  const { day, minutes } = warsawNow()
  const today = OPEN[day]
  if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
    return { open: true, text: `Biuro jest teraz otwarte, dziś do ${today[1]}:00` }
  }
  if (today && minutes < today[0] * 60) {
    return { open: false, text: `Dziś biuro czynne od ${today[0]}:00 do ${today[1]}:00` }
  }
  if (INTERNAL.has(day)) {
    return { open: false, text: 'Dziś dzień pracy wewnętrznej: bez obsługi klienta, tylko zgłoszenia awarii' }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    if (OPEN[d]) {
      const when = i === 1 ? 'jutro' : `w ${DAY_ACC[d]}`
      return { open: false, text: `Obsługa klienta ${when} od ${OPEN[d][0]}:00` }
    }
  }
  return { open: false, text: '' }
}

export default function OfficeStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null)

  useEffect(() => {
    setStatus(getStatus())
    const id = setInterval(() => setStatus(getStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (!status) {
    return <span className={className}>Obsługa klienta: pon. 7–17, śr. 7–15, pt. 7–13</span>
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} role="status">
      <span
        aria-hidden
        className={`inline-block h-2.5 w-2.5 rounded-full border-2 border-current ${status.open ? 'bg-current' : ''}`}
      />
      {status.text}
    </span>
  )
}
