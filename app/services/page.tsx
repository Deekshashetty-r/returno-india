'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { Palette, TrendingUp, Video, Globe, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    tagline: 'Built for recognition.',
    desc: 'Visual identities, logo systems, and comprehensive brand guideline kits. We shape how your brand looks, sounds, and is remembered.',
    features: ['Logo & identity systems', 'Brand guideline kits', 'Visual language', 'Packaging & collateral', 'Rebrand strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Growth you can measure.',
    desc: 'Targeted growth campaigns, performance marketing, and conversion optimization strategies designed to turn attention into results.',
    features: ['Performance campaigns', 'Conversion optimization', 'Social growth strategy', 'Analytics & reporting', 'Funnel design'],
  },
  {
    icon: Video,
    title: 'Content Creation',
    tagline: 'Stories that hold attention.',
    desc: 'High-retention video production, trend-based social media reels, and visual storytelling that feels native to every platform.',
    features: ['Reel & short-form video', 'Visual storytelling', 'Content systems', 'Scripting & editing', 'Monthly production'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Built for conversion.',
    desc: 'Fast, responsive, modern web applications built for conversion and a seamless user experience — from first visit to last click.',
    features: ['Website design & development', 'Performance & SEO', 'Conversion-focused UX', 'Content updates', 'Ongoing support'],
  },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <>
      <section className="relative pt-36 pb-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#1E40AF] rounded-full opacity-[0.2] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Services Built for <br />
            <span className="gradient-text">Real Growth</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-xl leading-relaxed">
            Four core pillars — branding, digital marketing, content creation, and web development — designed around one goal: meaningful, measurable growth.
          </p>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
          {services.map(({ icon: Icon, title, tagline, desc, features }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${Math.min((i + 1) * 50, 500)} service-card p-8 lg:p-10 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-12 h-12 bg-[#0084FF]/10 flex items-center justify-center mb-5 rounded-xl group-hover:bg-[#0084FF]/20 transition-colors">
                    <Icon size={20} className="text-[#0084FF]" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                  <p className="text-[#0084FF] text-sm italic">{tagline}</p>
                </div>

                <div className="lg:col-span-1">
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>

                <div>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-[#CCFF00] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="animate-on-scroll delay-100 text-gray-600 mb-8">
            Get in touch and we&apos;ll help you figure out the right combination of services for your brand goals and budget.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
