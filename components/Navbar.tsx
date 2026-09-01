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

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-4xl rounded-full ${
        scrolled
          ? 'bg-[#191929]/80 backdrop-blur-xl border border-white/10 shadow-xl'
          : 'bg-[#191929]/40 backdrop-blur-md border border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <BrandLogo />

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-body tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? 'text-[#F8F9F9]'
                    : 'text-[#9496A1] hover:text-[#F8F9F9]'
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="block h-px bg-[#0084FF] mt-0.5" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-white text-black rounded-full text-xs font-semibold py-2 px-3 pr-2 transition-transform hover:scale-105"
        >
          Get in Touch
          <span className="w-6 h-6 rounded-full bg-[#191929] text-white flex items-center justify-center">
            ↗
          </span>
        </Link>

        <button
          className="md:hidden text-[#F8F9F9] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[#191929]/95 backdrop-blur-xl rounded-2xl mt-2 border border-white/10 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide ${
                  pathname === href ? 'text-[#F8F9F9]' : 'text-[#9496A1]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5 mt-2 w-fit">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
