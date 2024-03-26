import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local";
import GoogleAnalytics from './GoogleAnalytics';

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
  description: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={MetropolisBlack.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  )
}
