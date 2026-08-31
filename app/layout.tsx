import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VYOM Studio — Where Ideas Go Beyond',
  description: 'VYOM Studio is a data-driven creative digital agency. We transform progressive brands through high-impact branding, intelligent web solutions, and strategic content creation.',
  keywords: 'VYOM Studio, branding, digital marketing, content creation, web development, digital agency',
  openGraph: {
    title: 'VYOM Studio',
    description: 'Where Ideas Go Beyond. Branding, digital marketing, content creation, and web development.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VYOM Studio',
    description: 'Where Ideas Go Beyond.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
