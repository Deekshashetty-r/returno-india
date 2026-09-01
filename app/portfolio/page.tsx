'use client'
import { useState, useRef } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react'

const categories = ['All', 'Design', 'Video']

function VideoCard({ src, title, category }: { src: string; title: string; category: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div
      className="relative bg-white border border-gray-200 overflow-hidden group card-hover cursor-pointer"
      style={{ aspectRatio: '9/16', maxHeight: '520px' }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onEnded={() => setPlaying(false)}
      />

      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />

      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-14 h-14 bg-[#0084FF] flex items-center justify-center rounded-full shadow-lg shadow-[#0084FF]/30 hover:scale-110 transition-transform">
          {playing ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 w-8 h-8 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        {muted ? <VolumeX size={14} className="text-white" /> : <Volume2 size={14} className="text-white" />}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-[#0084FF] text-xs tracking-widest uppercase block mb-0.5">{category}</span>
        <span className="text-white text-sm font-medium">{title}</span>
      </div>
    </div>
  )
}

function PosterCard({ src, title, category, desc }: { src: string; title: string; category: string; desc: string }) {
  return (
    <div
      className="relative bg-white border border-gray-200 overflow-hidden group card-hover"
      style={{ aspectRatio: '3/4' }}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-[#aaa] text-xs leading-relaxed mb-2">{desc}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-[#0084FF] text-xs tracking-widest uppercase block mb-0.5">{category}</span>
        <span className="text-white text-sm font-medium">{title}</span>
      </div>
    </div>
  )
}

const allWorks = [
  {
    id: 1,
    type: 'poster',
    src: '/portfolio/p1.jpeg',
    title: 'Your Brand Deserves Better Content',
    category: 'Design',
    desc: 'Promotional poster — bold concept with strong visual hierarchy.',
  },
  {
    id: 2,
    type: 'poster',
    src: '/portfolio/p2.jpeg',
    title: 'Creative Poster Design',
    category: 'Design',
    desc: 'Designed for social media with striking visual identity.',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561727/v1_sy6zpl.mp4',
    title: 'Brand Reel',
    category: 'Video',
    desc: 'Short-form brand awareness reel.',
  },
  
  {
    id: 4,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561741/v2_f3wo3b.mp4',
    title: 'Brand Reel',
    category: 'Video',
    desc: 'Promotion',
  },
  {
    id: 5,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561743/v3_dt5uqm.mp4',
    title: 'Brand Reel',
    category: 'Video',
    desc: 'Promotion',
  },
  {
    id: 6,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561733/v4_kksvp9.mp4',
    title: 'Brand Reel',
    category: 'Video',
    desc: 'Promotion',
  },
  {
    id: 7,
    type: 'poster',
    src: '/portfolio/p3.jpg',
    title: 'Creative Poster Design',
    category: 'Design',
    desc: 'Promotional poster — bold concept with strong visual hierarchy.',
  },
  {
    id: 8,
    type: 'poster',
    src: '/portfolio/p4.jpg',
    title: 'Creative Poster Design',
    category: 'Design',
    desc: 'Promotional poster — bold concept with strong visual hierarchy.',
  },
  {
    id: 9,
    type: 'video',
    src: 'https://res.cloudinary.com/dc4rdb6qg/video/upload/q_auto/f_auto/v1780561736/v5_ztgk5w.mp4',
    title: 'Brand Reel',
    category: 'Video',
    desc: 'Promotion',
  },
]

export default function PortfolioPage() {
  useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allWorks : allWorks.filter(w => w.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Our Work
          </h1>
          <p className="text-gray-600 text-xl max-w-xl leading-relaxed">
            Real projects — posters, videos, reels, and creative content we've built for brands.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 lg:top-20 z-30 bg-black/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 ${
                active === cat
                  ? 'bg-[#CCFF00] text-black rounded-full font-semibold'
                  : 'text-gray-600 border border-gray-200 hover:text-gray-900 hover:border-white/20 rounded-full'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filtered.map((work, i) => (
              <div key={work.id} className={`animate-on-scroll delay-${(i % 3 + 1) * 100}`}>
                {work.type === 'video' ? (
                  <VideoCard src={work.src} title={work.title} category={work.category} />
                ) : (
                  <PosterCard src={work.src} title={work.title} category={work.category} desc={work.desc} />
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-600">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* More coming soon */}
      <section className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-600 text-sm tracking-widest uppercase">More work being added soon</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="animate-on-scroll font-display text-4xl font-bold text-gray-900 mb-6">
            Want Work Like This?
          </h2>
          <p className="animate-on-scroll delay-100 text-gray-600 mb-8">
            Reach out and let's create something great together.
          </p>
          <Link href="/contact" className="animate-on-scroll delay-200 btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}