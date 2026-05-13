import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC0000',
          'red-soft': '#FEE8E8',
          'red-tint': '#FFF5F5',
          ink: '#0F172A',
          slate: '#475569',
          line: '#E2E8F0',
          bg: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)',
        soft: '0 30px 60px -30px rgba(204,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
export default config
