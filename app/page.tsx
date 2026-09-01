'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ArrowRight, ChevronRight, Camera, Clapperboard, Aperture, Star } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Branding',
    desc: 'Visual identities, logo systems, and comprehensive brand guideline kits built for recognition.',
  },
  {
    num: '02',
    title: 'Digital Marketing',
    desc: 'Targeted growth campaigns, performance marketing, and conversion optimization strategies.',
  },
  {
    num: '03',
    title: 'Content Creation',
    desc: 'High-retention video production, trend-based social media reels, and visual storytelling.',
  },
  {
    num: '04',
    title: 'Web Development',
    desc: 'Fast, responsive, modern web applications built for conversion and seamless user experience.',
  },
]

const portfolioItems = [
  { label: 'Your Brand Deserves Better Content', category: 'Design', type: 'image', src: '/portfolio/p1.jpeg' },
  { label: 'Creative Poster', category: 'Design', type: 'image', src: '/portfolio/p2.jpeg' },
  { label: 'Brand Reel', category: 'Video', type: 'video', src: '/portfolio/v1.mp4' },
  { label: 'Brand Reel', category: 'Video', type: 'video', src: '/portfolio/v2.mp4' },
]

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <header className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative Floating Elements */}
        <div className="hidden lg:block absolute top-1/4 left-[10%] animate-float text-white/40 rotate-12" style={{ animationDelay: '0s' }}>
          <Camera size={48} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute bottom-1/4 left-[15%] animate-float text-white/30 -rotate-12" style={{ animationDelay: '2s' }}>
          <Clapperboard size={56} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute top-1/3 right-[12%] animate-float text-white/30 rotate-45" style={{ animationDelay: '1s' }}>
          <Aperture size={64} strokeWidth={1} />
        </div>
        <div className="hidden lg:block absolute bottom-1/3 right-[20%] animate-float text-white/50 rotate-[20deg]" style={{ animationDelay: '3s' }}>
          <Star size={32} strokeWidth={1.5} fill="currentColor" className="opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center z-10">
          <h1 className="hero-title text-5xl sm:text-7xl lg:text-[7rem] font-bold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up mt-8">
            VYOM <span className="font-serif italic font-normal text-white">Studio</span>
          </h1>

     
          <span className="badge mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-[#0084FF] rounded-full animate-pulse" />
            Where Ideas Go Beyond
          </span>


          <p className="hero-subtitle text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: '0.15s' }}>
            We transform progressive brands through high-impact branding, intelligent web solutions, and strategic content creation.
          </p>

          <div className="cta-group flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.25s' }}>
            <Link href="/contact" className="btn-primary">
              Start a Project
              <span className="icon-circle">↗</span>
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services ↗
            </Link>
          </div>
        </div>
      </header>

      <section className="section-pad border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We help brands go beyond — with strategy and craft.
              </h2>
              <p className="animate-on-scroll delay-100 text-gray-600 text-base leading-relaxed mb-8">
                VYOM Studio is a modern digital agency. We partner with progressive brands to build high-impact identity systems, growth campaigns, content, and web experiences that convert.
              </p>
              <Link href="/about" className="animate-on-scroll delay-200 btn-outline inline-flex">
                Learn About Us <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Brand Identity', desc: 'Systems built for recognition and recall.' },
                { title: 'Growth Marketing', desc: 'Campaigns designed around conversion.' },
                { title: 'Content Systems', desc: 'Storytelling that holds attention.' },
                { title: 'Product Web', desc: 'Fast sites that feel premium and convert.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`animate-on-scroll delay-${(i + 1) * 100} service-card p-5 bg-gray-50 border-gray-100`}
                >
                  <h4 className="text-gray-900 font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900">
                What We Do
              </h2>
            </div>
            <Link href="/services" className="animate-on-scroll mt-6 md:mt-0 text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2">
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="services-grid">
            {pillars.map(({ num, title, desc }, i) => (
              <div
                key={title}
                className={`animate-on-scroll delay-${(i % 4) * 100 + 100} service-card bg-white border-gray-100`}
              >
                <span className="service-num">{num}</span>
                <h3 className="text-gray-900 font-display font-semibold text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900">
                Our Work
              </h2>
            </div>
            <Link href="/portfolio" className="animate-on-scroll mt-6 md:mt-0 text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map(({ label, category, type, src }, i) => (
              <div
                key={label + src}
                className={`animate-on-scroll delay-${(i % 3) * 100 + 100} border border-gray-200 rounded-2xl aspect-[4/3] relative overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer bg-gray-100`}
              >
                {type === 'video' ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[#0084FF] text-xs tracking-widest uppercase mb-1 block">{category}</span>
                  <span className="text-[#F8F9F9] text-sm font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-14">
            Why VYOM Studio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Data-Driven Creative', desc: 'Strategy and craft work together. We design for recognition, then optimize for results.' },
              { num: '02', title: 'Four Core Pillars', desc: 'Branding, digital marketing, content, and web — one studio, full coverage.' },
              { num: '03', title: 'Built for Conversion', desc: 'Every campaign, page, and asset is designed to move people from interest to action.' },
              { num: '04', title: 'Modern Aesthetic', desc: 'Premium creative output that makes your brand look world-class.' },
              { num: '05', title: 'Transparent Communication', desc: 'Clear reporting, honest timelines, and open communication at every stage.' },
              { num: '06', title: 'Ideas That Go Beyond', desc: 'We push past templates to build identities and experiences that stay with people.' },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`animate-on-scroll delay-${(i % 3) * 100 + 100} flex gap-5`}
              >
                <span className="font-display text-5xl font-bold text-[#4b54e3]/10 leading-none select-none flex-shrink-0">
                  {num}
                </span>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#1a1744] to-[#3a358c] rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#818cf8] to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />

            <h2 className="animate-on-scroll font-display text-4xl lg:text-6xl font-bold text-white mb-6 relative">
              Ready to Go Beyond?
            </h2>
            <p className="animate-on-scroll delay-100 text-white/80 text-lg max-w-lg mx-auto mb-10 relative">
              Let&apos;s talk about how VYOM Studio can help you build a stronger brand, sharper digital presence, and experiences that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200 relative">
              <Link href="/contact" className="btn-primary">
                Start a Project <span className="icon-circle">↗</span>
              </Link>
              <a
                href="https://wa.me/918792547821?text=Hi%20VYOM%20Studio%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
