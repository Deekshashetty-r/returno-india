import type { Metadata } from 'next'
import '../app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Returno India — Business Growth & Digital Support Agency',
  description: 'Returno India helps modern businesses build better digital presence through content, social media, creative support, and business growth solutions.',
  keywords: 'digital marketing, social media management, content creation, business growth, branding, India',
  openGraph: {
    title: 'Returno India',
    description: 'Building Better Digital Presence for Modern Businesses',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Returno India',
    description: 'Building Better Digital Presence for Modern Businesses',
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
