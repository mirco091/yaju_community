import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YAJU VAULT',
  description: 'Holder-powered Web3 oripa vault.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
