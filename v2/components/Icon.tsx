type Props = { name: keyof typeof icons; className?: string }

const icons = {
  building: (
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2m2 0h2m-6 4h2m2 0h2m-6 4h2m2 0h2" />
  ),
  layers: (
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />
  ),
  user: (
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M20 8v6M23 11h-6M12 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
  ),
  tool: (
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-6.6 6.6 2.5 2.5L11.8 14a4 4 0 0 1 5.4-5.4M21 3l-3.5 3.5L21 10" />
  ),
  ledger: (
    <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4zM4 4v12a4 4 0 0 0 4 4M8 8h8M8 12h8M8 16h5" />
  ),
  monitor: (
    <path d="M3 4h18v12H3zM8 20h8M12 16v4" />
  ),
  alert: (
    <path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.41 0z" />
  ),
  check: <path d="M5 12l5 5L20 7" />,
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: <path d="M4 4h16v16H4zM4 4l8 7 8-7" />,
  pin: <path d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  clock: <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 6v6l4 2" />,
}

export default function Icon({ name, className = 'w-6 h-6' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  )
}
