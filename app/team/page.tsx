'use client'
import { useScrollReveal } from '@/lib/useScrollReveal'
import Link from 'next/link'
import { ArrowRight, Linkedin, Instagram } from 'lucide-react'

const team = [
  {
    name: 'Kisha Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary behind Returno India. Passionate about helping businesses unlock their digital potential through strategy and creativity.',
    initials: 'KK',
    color: '#C8102E',
  },
  {
  name: 'Lenzil',
  role: 'Video Editing Support',
  bio: 'Our editing guy — brings raw footage to life with sharp cuts, smooth transitions, and content that stops the scroll.',
  initials: 'LZ',
  color: '#2a2a2a',
},
{
  name: 'Deeksha Shetty',
  role: 'Web Developer & Designer',
  bio: 'Designs and builds modern, fast websites that look premium and convert visitors into clients.',
  initials: 'DS',
  color: '#1e1e1e',
},
{
  name: 'Sheron',
  role: 'Video Shooting & Editing Support',
  bio: 'Transforms ideas into compelling visuals through creative shooting and content support.',
  initials: 'SH',
  color: '#2a2a2a',
},
]

export default function TeamPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-[#1e1e1e]">
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            The People Behind <br />
            <span className="accent-gradient-text">Returno India</span>
          </h1>
          <p className="text-[#888] text-xl max-w-xl leading-relaxed">
            A small, focused team of creators, strategists, and operators — united by a passion for building great things.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured — Founder */}
          <div className="animate-on-scroll mb-8">
            <div className="bg-[#0d0d0d] border border-[#1e1e1e] p-10 lg:p-14 card-hover group grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl lg:text-4xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${team[0].color}, ${team[0].color}88)` }}>
                  {team[0].initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{team[0].name}</h3>
                  <span className="text-[#C8102E] text-xs tracking-widest uppercase">{team[0].role}</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-[#888] leading-relaxed mb-6">{team[0].bio}</p>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/returno-india-8646333b0/" target="_blank" rel="noopener noreferrer"
                    className="text-[#555] hover:text-[#C8102E] transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://instagram.com/returnoofficial45" target="_blank" rel="noopener noreferrer"
                    className="text-[#555] hover:text-[#C8102E] transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(1).map(({ name, role, bio, initials, color }, i) => (
              <div
                key={name}
                className={`animate-on-scroll delay-${(i + 1) * 100} bg-[#0d0d0d] border border-[#1e1e1e] p-6 card-hover group flex flex-col`}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-0.5">{name}</h3>
                <span className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">{role}</span>
                <p className="text-[#666] text-sm leading-relaxed flex-1">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-pad bg-[#080808] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                How We Work
              </h2>
              <div className="space-y-4 text-[#888] text-sm leading-relaxed">
                <p className="animate-on-scroll">We're a lean, focused team that believes great work comes from clear communication, shared ownership, and a genuine love of craft.</p>
                <p className="animate-on-scroll delay-100">Every project is a collaboration — between us and our clients. We don't just execute briefs; we partner with you to understand your goals and build something that actually works.</p>
                <p className="animate-on-scroll delay-200">We're growing, learning, and constantly raising the bar for what we deliver. If you want to work with a team that cares as much about your success as you do — we're it.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Client-first mindset', val: '100%' },
                { label: 'On-time delivery', val: '95%' },
                { label: 'Repeat clients', val: '80%' },
                { label: 'Avg. client rating', val: '4.9★' },
              ].map(({ label, val }, i) => (
                <div key={label} className={`animate-on-scroll delay-${(i + 1) * 100} bg-[#111] border border-[#1e1e1e] p-6 text-center card-hover`}>
                  <div className="font-display text-3xl font-bold text-white mb-1">{val}</div>
                  <div className="text-[#666] text-xs uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-pad border-t border-[#1e1e1e] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl font-bold text-white mb-6">
            Want to Join the Team?
          </h2>
          <p className="animate-on-scroll delay-100 text-[#888] mb-8">
            We're always open to collaborating with talented creators, designers, and strategists. If you're passionate about what we do — reach out.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
