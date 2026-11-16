import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        red: '#CC0000',
        'red-dark': '#A30000',
        paper: '#F5F4F1',
        line: '#DEDBD6',
        muted: '#5B5853',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
}
export default config
