'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Clarity', desc: 'We believe great communication starts with clarity. Every piece of work we create is purposeful and precise.' },
  { title: 'Creativity', desc: 'We push creative boundaries to deliver work that stands out — visually, strategically, and emotionally.' },
  { title: 'Consistency', desc: 'Growth requires consistency. We build systems that ensure your brand shows up reliably across every channel.' },
  { title: 'Commitment', desc: "Your growth is our mission. We're invested in your success and treat every project like it's our own." },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <section className="relative pt-36 pb-20 border-b border-white/[0.08] overflow-hidden">
        <div className="glow-backdrop" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1E40AF] rounded-full opacity-[0.2] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#F8F9F9] leading-tight mb-6 max-w-3xl">
            We Are <span className="gradient-text">VYOM Studio</span>
          </h1>
          <p className="text-[#9496A1] text-xl max-w-2xl leading-relaxed">
            Where Ideas Go Beyond. A data-driven creative digital agency built for progressive brands — and the opportunities ahead of them.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-[#F8F9F9] mb-8">
                Our Story
              </h2>
              <div className="space-y-5 text-[#9496A1] text-base leading-relaxed">
                <p className="animate-on-scroll">
                  VYOM Studio was founded on a simple observation: most brands have tremendous potential — but lack the identity, digital systems, and creative support to realize it.
                </p>
                <p className="animate-on-scroll delay-100">
                  We started as a focused creative studio and have grown into a full-service digital agency. Every service we offer is designed to solve real problems for real businesses — not just tick boxes.
                </p>
                <p className="animate-on-scroll delay-200">
                  Today, VYOM Studio supports brands across industries with branding, digital marketing, content creation, and web development — all under one roof.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="animate-on-scroll service-card p-8">
                <h3 className="text-[#0084FF] text-xs uppercase tracking-widest mb-3">Our Mission</h3>
                <p className="text-[#F8F9F9] font-display text-xl font-medium leading-snug">
                  To empower brands with the identity, digital tools, and creative systems they need to grow with confidence.
                </p>
              </div>
              <div className="animate-on-scroll delay-100 service-card p-8">
                <h3 className="text-[#0084FF] text-xs uppercase tracking-widest mb-3">Our Vision</h3>
                <p className="text-[#F8F9F9] font-display text-xl font-medium leading-snug">
                  To become the most trusted creative partner for progressive brands — known for craft, consistency, and results.
                </p>
              </div>
              <div className="animate-on-scroll delay-200 service-card p-8">
                <h3 className="text-[#0084FF] text-xs uppercase tracking-widest mb-3">What Drives Us</h3>
                <p className="text-[#9496A1] text-sm leading-relaxed">
                  We&apos;re driven by impact. Every brand we support, every campaign we run, every experience we build — it all points toward meaningful, measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0a0a0c] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-[#F8F9F9] mb-14">
            Our Core Values
          </h2>
          <div className="services-grid">
            {values.map(({ title, desc }, i) => (
              <div key={title} className={`animate-on-scroll delay-${(i + 1) * 100} service-card`}>
                <h3 className="font-display text-2xl font-bold text-[#F8F9F9] mb-4">{title}</h3>
                <p className="text-[#9496A1] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-[#F8F9F9] mb-14">
            What We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { area: 'Branding', detail: 'Visual identities, logo systems, and brand guidelines built for recognition and long-term recall.' },
              { area: 'Digital Marketing', detail: 'Targeted growth campaigns, performance marketing, and conversion optimization across channels.' },
              { area: 'Content Creation', detail: 'High-retention video, social storytelling, and content systems that keep your audience engaged.' },
              { area: 'Web Development', detail: 'Fast, responsive, conversion-focused websites and web applications with a seamless user experience.' },
            ].map(({ area, detail }, i) => (
              <div key={area} className={`animate-on-scroll delay-${(i % 2 + 1) * 100} flex gap-6 p-6 service-card`}>
                <span className="service-num text-3xl mb-0 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[#F8F9F9] font-medium mb-2">{area}</h3>
                  <p className="text-[#9496A1] text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0a0a0c] border-t border-white/[0.08] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-[#F8F9F9] mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="animate-on-scroll delay-100 text-[#9496A1] mb-8">
            Whether you&apos;re just starting or looking to scale — VYOM Studio has the team, tools, and strategy to help.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
