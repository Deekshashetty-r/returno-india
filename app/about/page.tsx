'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Clarity', desc: 'We believe great communication starts with clarity. Every piece of content we create is purposeful and precise.' },
  { title: 'Creativity', desc: 'We push creative boundaries to deliver work that stands out — visually, strategically, and emotionally.' },
  { title: 'Consistency', desc: 'Growth requires consistency. We build systems that ensure your brand shows up reliably across every channel.' },
  { title: 'Commitment', desc: "Your growth is our mission. We're invested in your success and treat every project like it's our own." },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-[#1e1e1e] overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            We Are <span className="accent-gradient-text">Returno India</span>
          </h1>
          <p className="text-[#888] text-xl max-w-2xl leading-relaxed">
            A modern business growth and digital support agency built for the ambitions of today's businesses — and tomorrow's opportunities.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-5 text-[#888] text-base leading-relaxed">
                <p className="animate-on-scroll">
                  Returno India was founded on a simple observation: most businesses have tremendous potential — but lack the digital systems, content infrastructure, and creative support to realize it.
                </p>
                <p className="animate-on-scroll delay-100">
                  We started as a small creative support initiative and have grown into a full-service digital and business growth agency. Every service we offer is designed to solve real problems for real businesses — not just tick boxes.
                </p>
                <p className="animate-on-scroll delay-200">
                  Today, Returno India supports businesses across industries with social media management, content creation, branding, website support, and operational coordination — all under one roof.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="animate-on-scroll bg-[#111] border border-[#1e1e1e] p-8 card-hover">
                <h3 className="text-[#C8102E] text-xs uppercase tracking-widest mb-3">Our Mission</h3>
                <p className="text-white font-display text-xl font-medium leading-snug">
                  To empower businesses with the digital tools, creative output, and strategic systems they need to grow with confidence.
                </p>
              </div>
              <div className="animate-on-scroll delay-100 bg-[#111] border border-[#1e1e1e] p-8 card-hover">
                <h3 className="text-[#C8102E] text-xs uppercase tracking-widest mb-3">Our Vision</h3>
                <p className="text-white font-display text-xl font-medium leading-snug">
                  To become India's most trusted digital partner for modern businesses — known for quality, consistency, and results.
                </p>
              </div>
              <div className="animate-on-scroll delay-200 bg-[#111] border border-[#1e1e1e] p-8 card-hover">
                <h3 className="text-[#C8102E] text-xs uppercase tracking-widest mb-3">What Drives Us</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  We're driven by impact. Every business we support, every campaign we run, every piece of content we create — it all points toward meaningful, measurable growth for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-14">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {values.map(({ title, desc }, i) => (
              <div key={title} className={`animate-on-scroll delay-${(i + 1) * 100} bg-[#080808] p-8 card-hover border border-transparent`}>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-pad border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-14">
            What We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { area: 'Digital Communication', detail: 'We craft communication systems that help brands speak clearly, consistently, and compellingly across all digital channels.' },
              { area: 'Content Systems', detail: 'From ideation to publishing — we build end-to-end content pipelines that keep your audience engaged and your brand relevant.' },
              { area: 'Social Media Presence', detail: 'Platform-native strategies and execution that grow your audience and build community around your brand.' },
              { area: 'Business Growth Support', detail: 'Strategic advisory and execution support to help businesses expand their reach, revenue, and reputation.' },
              { area: 'Creative & Branding', detail: 'Visual identity, design systems, and creative content that make your brand unforgettable.' },
              { area: 'Operational Coordination', detail: 'Backend support and coordination systems that keep your digital operations running smoothly at scale.' },
            ].map(({ area, detail }, i) => (
              <div key={area} className={`animate-on-scroll delay-${(i % 2 + 1) * 100} flex gap-6 p-6 border border-[#1e1e1e] bg-[#0d0d0d] card-hover`}>
                <span className="text-[#C8102E] font-display text-4xl font-bold opacity-30 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-white font-medium mb-2">{area}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="animate-on-scroll delay-100 text-[#888] mb-8">
            Whether you're just starting or looking to scale — Returno India has the team, tools, and strategy to help.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
