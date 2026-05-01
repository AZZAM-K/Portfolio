import type { Metadata } from 'next'
import { Press_Start_2P, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const displayFont = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})
const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Azzam Al Kahil',
  description: 'Welcome to my portfolio website!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
