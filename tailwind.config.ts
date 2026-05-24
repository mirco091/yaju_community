import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vault: '#07070b',
        panel: '#11111a',
        gold: '#f7c948',
        purple: '#8b5cf6',
        neon: '#15f5ba'
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
        gold: '0 0 36px rgba(247, 201, 72, 0.25)'
      }
    }
  },
  plugins: []
}
export default config
