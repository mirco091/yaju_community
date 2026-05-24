import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { boxShadow: { glow: '0 0 35px rgba(168,85,247,.45)' } } }, plugins: [] }
export default config
