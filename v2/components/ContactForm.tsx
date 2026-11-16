'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

const TOPICS = [
  'Zarządzanie wspólnotą mieszkaniową',
  'Nieruchomość komercyjna lub prywatna',
  'Utrzymanie czystości',
  'Sprawa mieszkańca (opłaty, rozliczenia)',
  'Inna sprawa',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full border-2 border-ink/25 bg-white px-3.5 py-2.5 text-[16px] text-ink transition-colors focus:border-ink focus:outline-none'

const lbl = 'mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.1em]'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [topic, setTopic] = useState(TOPICS[0])

  useEffect(() => {
    const temat = new URLSearchParams(window.location.search).get('temat')
    if (temat === 'sprzatanie') setTopic(TOPICS[2])
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    if (d.get('_honey')) return

    setStatus('sending')
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Imię i nazwisko': d.get('name'),
          'E-mail': d.get('email'),
          Telefon: d.get('phone') || 'nie podano',
          Temat: d.get('topic'),
          Wiadomość: d.get('message'),
          'Zgoda na przetwarzanie danych': 'tak',
          _replyto: d.get('email'),
          _subject: `Zapytanie ze strony www: ${d.get('topic')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && String(json.success) === 'true') {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-ink p-7 text-white" role="status">
        <p className="cond text-[34px] uppercase">Wiadomość wysłana</p>
        <p className="mt-3 text-white/80">
          Dziękujemy. Odpowiemy w dni pracy biura. W pilnej sprawie prosimy o telefon: {SITE.phoneDisplay}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={lbl}>Imię i nazwisko</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={lbl}>
            Telefon <span className="font-normal normal-case tracking-normal text-muted">(opcjonalnie)</span>
          </span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>

      <label className="block">
        <span className={lbl}>E-mail</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>

      <label className="block">
        <span className={lbl}>W jakiej sprawie?</span>
        <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
          {TOPICS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className={lbl}>Wiadomość</span>
        <textarea name="message" required rows={6} className={field} />
      </label>

      <label className="flex items-start gap-3 text-[14px] leading-snug text-muted">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#CC0000]" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez Biuro Checz’ w celu udzielenia odpowiedzi na
          zapytanie.
        </span>
      </label>

      {status === 'error' && (
        <p className="bg-red px-4 py-3 text-[15px] text-white" role="alert">
          Nie udało się wysłać wiadomości. Prosimy spróbować ponownie albo zadzwonić pod numer {SITE.phoneDisplay}.
        </p>
      )}

      <div>
        <button type="submit" className="btn-red disabled:opacity-60" disabled={status === 'sending'}>
          {status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
        </button>
      </div>
    </form>
  )
}
