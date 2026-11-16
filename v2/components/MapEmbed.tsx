import { MAP_EMBED } from '@/lib/site'

export default function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <iframe
      title="Mapa dojazdu: Biuro Checz’, ul. Jana III Sobieskiego 223/4, Wejherowo"
      src={MAP_EMBED}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`block w-full border-0 ${className}`}
    />
  )
}
