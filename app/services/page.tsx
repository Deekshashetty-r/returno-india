'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { Megaphone, Video, Palette, Star, Globe, TrendingUp, Cpu, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Social Media Management',
    tagline: 'Grow your presence, build your community.',
    desc: 'End-to-end social media management across Instagram, LinkedIn, and more. From strategy to scheduling to engagement — we handle it all so you can focus on running your business.',
    features: ['Content calendar creation', 'Platform-specific strategy', 'Community management', 'Analytics & reporting', 'Hashtag & reach optimization'],
  },
  {
    icon: Video,
    title: 'Content Creation & Reels',
    tagline: 'Stop the scroll. Start the conversation.',
    desc: 'High-quality short-form video content designed to capture attention and drive engagement. We script, produce, and edit content that feels native to the platform and true to your brand.',
    features: ['Reel scripting & storyboarding', 'Professional editing', 'Caption & audio strategy', 'Trend-led formats', 'Monthly content batching'],
  },
  {
    icon: Palette,
    title: 'Creative Design Support',
    tagline: 'Visuals that mean business.',
    desc: 'From brand identity to post designs to presentation decks — we deliver creative output that looks premium, consistent, and distinctly yours.',
    features: ['Brand identity design', 'Social media graphics', 'Promotional materials', 'Presentation design', 'Visual guidelines'],
  },
  {
    icon: Star,
    title: 'Promotional Content',
    tagline: 'Campaigns that convert.',
    desc: 'Strategic promotional content for launches, offers, events, and campaigns. We craft messaging and creative that drives action — not just impressions.',
    features: ['Campaign creative', 'Offer & launch content', 'Event promotion', 'Ad creative design', 'Copywriting & messaging'],
  },
  {
    icon: Globe,
    title: 'Website Support',
    tagline: 'Your digital home, built right.',
    desc: 'Modern, fast, and SEO-optimized websites built for performance and conversion. Whether it\'s a new build or ongoing support — we ensure your website works as hard as you do.',
    features: ['Website design & development', 'SEO optimization', 'Performance tuning', 'Content updates', 'Maintenance & support'],
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Support',
    tagline: 'Strategy that scales.',
    desc: 'Beyond execution — we work with you on the strategic level to identify growth opportunities, optimize your digital footprint, and position your brand for scale.',
    features: ['Digital strategy consulting', 'Growth roadmapping', 'Competitor analysis', 'Brand positioning', 'Market expansion support'],
  },
  {
    icon: Cpu,
    title: 'Operational Coordination Support',
    tagline: 'Smooth operations, at scale.',
    desc: 'Backend coordination and support to keep your digital operations running smoothly. We act as an extension of your team — reliable, responsive, and results-oriented.',
    features: ['Project coordination', 'Workflow management', 'Vendor & freelancer management', 'Reporting & dashboards', 'Process documentation'],
  },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-[#1e1e1e] overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Services Built for <br />
            <span className="accent-gradient-text">Real Growth</span>
          </h1>
          <p className="text-[#888] text-xl max-w-xl leading-relaxed">
            Every service we offer is designed around one goal: meaningful, measurable growth for your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
          {services.map(({ icon: Icon, title, tagline, desc, features }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${Math.min((i + 1) * 50, 500)} bg-[#0d0d0d] border border-[#1e1e1e] p-8 lg:p-10 card-hover group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left */}
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 bg-[#C8102E]/10 flex items-center justify-center mb-5 group-hover:bg-[#C8102E]/20 transition-colors">
                    <Icon size={20} className="text-[#C8102E]" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">{title}</h2>
                  <p className="text-[#C8102E] text-sm italic">{tagline}</p>
                </div>

                {/* Middle */}
                <div className="lg:col-span-1">
                  <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
                </div>

                {/* Right — Features */}
                <div>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#888]">
                        <Check size={14} className="text-[#C8102E] mt-0.5 flex-shrink-0" />
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

      {/* CTA */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="animate-on-scroll delay-100 text-[#888] mb-8">
            Get in touch and we'll help you figure out the right combination of services for your business goals and budget.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
