import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local";
const MetropolisBlack = localFont({
  src: [
    {
      path: './fonts/Metropolis-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Metropolis-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Metropolis-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Metropolis-Black.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})


export const metadata: Metadata = {
  title: 'Sixteen Archive',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={MetropolisBlack.className}>{children}</body>
    </html>
  )
}
