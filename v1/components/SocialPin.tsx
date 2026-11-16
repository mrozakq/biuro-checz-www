import { SITE } from '@/lib/site'
import { FacebookIcon, InstagramIcon } from './icons'

export default function SocialPin() {
  const items = [
    { href: SITE.facebook, label: 'Biuro Checz’ na Facebooku', Icon: FacebookIcon },
    { href: SITE.instagram, label: 'Biuro Checz’ na Instagramie', Icon: InstagramIcon },
  ]

  return (
    <aside
      aria-label="Media społecznościowe"
      className="fixed bottom-20 right-0 z-40 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.18)] md:bottom-auto md:top-1/2 md:-translate-y-1/2 print:hidden"
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href || '#'}
          target={href ? '_blank' : undefined}
          rel="noopener"
          aria-label={label}
          title={label}
          className="grid h-10 w-10 place-items-center bg-ink md:h-11 md:w-11 text-white transition-colors first:border-b first:border-white/15 hover:bg-red"
        >
          <Icon />
        </a>
      ))}
    </aside>
  )
}
