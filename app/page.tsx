'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ArrowRight, TrendingUp, Megaphone, Palette, Video, Globe, Cpu, ChevronRight } from 'lucide-react'

const services = [
  { icon: Megaphone, title: 'Social Media Management', desc: 'Strategic content calendars, posting, engagement, and growth across platforms.' },
  { icon: Video, title: 'Content Creation & Reels', desc: 'High-quality short-form video content that captures attention and drives engagement.' },
  { icon: Palette, title: 'Creative Design Support', desc: 'Branding, visual identity, and design systems tailored to your business.' },
  { icon: Globe, title: 'Website Support', desc: 'Modern, fast, and SEO-optimized websites built for performance and conversion.' },
  { icon: TrendingUp, title: 'Business Growth Support', desc: 'Strategic guidance to scale your business, reach, and digital footprint.' },
  { icon: Cpu, title: 'Operational Coordination', desc: 'End-to-end operational support to keep your business running smoothly.' },
]

/*const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years of Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]*/

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
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        {/* Red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8102E] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#C8102E]/30 bg-[#C8102E]/5 px-4 py-1.5 mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full animate-pulse" />
            <span className="text-xs text-[#C8102E] tracking-widest uppercase font-medium">Business Growth Agency</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up">
          Returno  
          
          <span className="accent-gradient-text">India</span>
          </h1>

          <p className="text-[#888] text-lg sm:text-xl max-w-xl mx-auto mb-10 animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: '0.15s' }}>
            Content &bull; Social Media &bull; Creative Support &bull; Business Growth
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.25s' }}>
            <Link href="/contact" className="btn-primary">
              Get Started <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline">
              View Services
            </Link>
          </div>

          {/* 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-[#1e1e1e] animate-fade-up"
            style={{ animationDelay: '0.4s' }}>
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-[#0d0d0d] p-6 lg:p-8">
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-[#666] text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section-pad border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                We help businesses grow digitally — with clarity and creativity.
              </h2>
              <p className="animate-on-scroll delay-100 text-[#888] text-base leading-relaxed mb-8">
                Returno India is a modern business growth and digital support agency. We partner with businesses to build powerful digital communication systems — from content and social media to branding and operational support.
              </p>
              <Link href="/about" className="animate-on-scroll delay-200 btn-outline inline-flex">
                Learn About Us <ChevronRight size={16} />
              </Link>
            </div>
             <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Content Strategy', desc: 'Data-driven content that resonates and converts.' },
                { title: 'Social Growth', desc: 'Organic and paid strategies for platform growth.' },
                { title: 'Creative Output', desc: 'Visuals and videos that stop the scroll.' },
                { title: 'Business Support', desc: 'Operational systems that scale with you.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`animate-on-scroll delay-${(i + 1) * 100} bg-[#111] border border-[#1e1e1e] p-5 card-hover`}
                >
                  <h4 className="text-white font-medium text-sm mb-2">{item.title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{item.desc}</p>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white">
                What We Do
              </h2>
            </div>
            <Link href="/services" className="animate-on-scroll mt-6 md:mt-0 text-sm text-[#888] hover:text-white transition-colors inline-flex items-center gap-2">
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`animate-on-scroll delay-${(i % 3) * 100 + 100} bg-[#0a0a0a] p-8 group card-hover border border-transparent`}
              >
                <div className="w-10 h-10 bg-[#C8102E]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8102E]/20 transition-colors">
                  <Icon size={18} className="text-[#C8102E]" />
                </div>
                <h3 className="text-white font-medium text-base mb-3">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-pad border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white">
                Our Work
              </h2>
            </div>
            <Link href="/portfolio" className="animate-on-scroll mt-6 md:mt-0 text-sm text-[#888] hover:text-white transition-colors inline-flex items-center gap-2">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map(({ label, category, type, src }, i) => (
  <div
    key={label}
    className={`animate-on-scroll delay-${(i % 3) * 100 + 100} border border-[#1e1e1e] aspect-[4/3] relative overflow-hidden group card-hover cursor-pointer bg-[#111]`}
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
      <span className="text-[#C8102E] text-xs tracking-widest uppercase mb-1 block">{category}</span>
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-14">
            Why Returno India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Startup-Focused Approach', desc: 'We understand the pace, constraints, and ambitions of growing businesses. Our solutions are built to scale.' },
              { num: '02', title: 'End-to-End Support', desc: 'From strategy to execution — content, design, social, ops. One team, full coverage.' },
              { num: '03', title: 'Results-Driven', desc: 'Every service is designed with growth in mind. We measure what matters and optimize relentlessly.' },
              { num: '04', title: 'Modern Aesthetic', desc: 'Premium creative output that makes your brand look world-class and compete at the highest level.' },
              { num: '05', title: 'Transparent Communication', desc: 'Clear reporting, honest timelines, and open communication at every stage of the project.' },
              { num: '06', title: 'Built for India', desc: 'Deep understanding of the Indian business landscape with globally competitive output quality.' },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`animate-on-scroll delay-${(i % 3) * 100 + 100} flex gap-5`}
              >
                <span className="font-display text-5xl font-bold text-[#1e1e1e] leading-none select-none flex-shrink-0">
                  {num}
                </span>
                <div>
                  <h3 className="text-white font-medium mb-2">{title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-pad border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#0d0d0d] border border-[#1e1e1e] p-10 lg:p-20 text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#C8102E]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#C8102E]/5 to-transparent pointer-events-none" />

            <h2 className="animate-on-scroll font-display text-4xl lg:text-6xl font-bold text-white mb-6 relative">
              Ready to Grow Your Business?
            </h2>
            <p className="animate-on-scroll delay-100 text-[#888] text-lg max-w-lg mx-auto mb-10 relative">
              Let's talk about how Returno India can help you build a stronger digital presence and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200 relative">
              <Link href="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918792547821"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
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
