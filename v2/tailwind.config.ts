import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        red: '#CC0000',
        'red-dark': '#A80000',
        paper: '#F2EEE6',
        card: '#FBF9F5',
        muted: '#57524B',
        rule: '#141414',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
    },
  },
  plugins: [],
}
export default config
