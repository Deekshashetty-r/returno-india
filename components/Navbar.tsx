'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isHome = pathname === '/';
  const isLight = !isHome || scrolled;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-4xl rounded-full ${
        isLight
          ? 'bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg'
          : 'bg-[#191929]/20 backdrop-blur-md border border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <BrandLogo theme={isLight ? 'light' : 'dark'} />

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-body tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? (isLight ? 'text-blue-600 font-semibold' : 'text-[#F8F9F9]')
                    : (isLight ? 'text-gray-600 hover:text-gray-900' : 'text-[#9496A1] hover:text-[#F8F9F9]')
                }`}
              >
                {label}
                {pathname === href && !isLight && (
                  <span className="block h-px bg-[#0084FF] mt-0.5" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center gap-2 rounded-full text-xs font-semibold py-2 px-3 pr-2 transition-transform hover:scale-105 ${
            isLight ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          Get in Touch
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
            isLight ? 'bg-white text-gray-900' : 'bg-[#191929] text-white'
          }`}>
            ↗
          </span>
        </Link>

        <button
          className={`md:hidden p-1 ${isLight ? 'text-gray-900' : 'text-[#F8F9F9]'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden backdrop-blur-xl rounded-2xl mt-2 border ${
          isLight ? 'bg-white/95 border-gray-200 shadow-xl' : 'bg-[#191929]/95 border-white/10 shadow-xl'
        } ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide block ${
                  pathname === href
                    ? (isLight ? 'text-blue-600 font-semibold' : 'text-[#F8F9F9]')
                    : (isLight ? 'text-gray-600' : 'text-[#9496A1]')
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className={`inline-flex text-xs py-2.5 px-6 mt-2 rounded-full font-semibold transition-transform hover:scale-105 ${
              isLight ? 'bg-gray-900 text-white' : 'bg-white text-black'
            }`}>
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
