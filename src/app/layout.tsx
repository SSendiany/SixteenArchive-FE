import './globals.css'
import type { Metadata } from 'next'
import { Metrophobic, Dela_Gothic_One } from 'next/font/google'

const metrophobic = Metrophobic({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creative Insight',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={metrophobic.className}>{children}</body>
    </html>
  )
}
