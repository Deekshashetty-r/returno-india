'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { Phone, Mail, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react'

export default function ContactPage() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // ── Replace with your preferred form submission method:
    // Option A: Formspree — https://formspree.io (free tier available)
    // Option B: EmailJS — https://emailjs.com
    // Option C: Your own API route at /api/contact
    //
    // Example with Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // if (res.ok) setStatus('sent'); else setStatus('error');

    // Demo: simulate sending
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }*/

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('sending')

  const res = await fetch('https://formspree.io/f/xwvzajyd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  if (res.ok) {
    setStatus('sent')
  } else {
    setStatus('error')
  }
}

  const inputClass = "w-full bg-[#111] border border-[#1e1e1e] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 border-b border-[#1e1e1e]">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="accent-line" />
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Let's Talk
          </h1>
          <p className="text-[#888] text-xl max-w-lg leading-relaxed">
            Have a project in mind? Ready to grow your digital presence? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="accent-line" />
                <h2 className="animate-on-scroll font-display text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="animate-on-scroll text-[#888] text-sm leading-relaxed">
                  Whether you're looking for a full-service partner or need support in a specific area — we're here to help. Drop us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="animate-on-scroll delay-100 space-y-4">
                <a href="tel:8792547821"
                  className="flex items-center gap-4 p-4 bg-[#111] border border-[#1e1e1e] card-hover group">
                  <div className="w-10 h-10 bg-[#C8102E]/10 flex items-center justify-center group-hover:bg-[#C8102E]/20 transition-colors">
                    <Phone size={16} className="text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#666] text-xs uppercase tracking-wide mb-0.5">Phone</div>
                    <div className="text-white text-sm">+91 87925 47821</div>
                  </div>
                </a>

                <a href="mailto:kishakumar062006@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#111] border border-[#1e1e1e] card-hover group">
                  <div className="w-10 h-10 bg-[#C8102E]/10 flex items-center justify-center group-hover:bg-[#C8102E]/20 transition-colors">
                    <Mail size={16} className="text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#666] text-xs uppercase tracking-wide mb-0.5">Email</div>
                    <div className="text-white text-sm break-all">kishakumar062006@gmail.com</div>
                  </div>
                </a>

                <a href="https://instagram.com/returnoofficial45" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111] border border-[#1e1e1e] card-hover group">
                  <div className="w-10 h-10 bg-[#C8102E]/10 flex items-center justify-center group-hover:bg-[#C8102E]/20 transition-colors">
                    <Instagram size={16} className="text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#666] text-xs uppercase tracking-wide mb-0.5">Instagram</div>
                    <div className="text-white text-sm">@returnoofficial45</div>
                  </div>
                </a>

                <a href="https://linkedin.com/company/returno-india" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111] border border-[#1e1e1e] card-hover group">
                  <div className="w-10 h-10 bg-[#C8102E]/10 flex items-center justify-center group-hover:bg-[#C8102E]/20 transition-colors">
                    <Linkedin size={16} className="text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-[#666] text-xs uppercase tracking-wide mb-0.5">LinkedIn</div>
                    <div className="text-white text-sm">Returno India</div>
                  </div>
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918792547821?text=Hi%20Returno%20India%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll delay-200 w-full flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] py-4 text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="animate-on-scroll bg-[#0d0d0d] border border-[#1e1e1e] p-8 lg:p-10">
                <h3 className="font-display text-2xl font-bold text-white mb-8">Send Us a Message</h3>

                {status === 'sent' ? (
                  <div className="text-center py-16">
                    <div className="w-14 h-14 bg-[#C8102E]/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-[#C8102E]" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-[#888] text-sm">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                      className="mt-6 text-sm text-[#C8102E] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#666] text-xs uppercase tracking-wide block mb-1.5">Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[#666] text-xs uppercase tracking-wide block mb-1.5">Email *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#666] text-xs uppercase tracking-wide block mb-1.5">Phone</label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[#666] text-xs uppercase tracking-wide block mb-1.5">Service Interested In</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass + ' cursor-pointer'}
                        >
                          <option value="">Select a service</option>
                          <option value="social-media">Social Media Management</option>
                          <option value="content">Content Creation & Reels</option>
                          <option value="design">Creative Design Support</option>
                          <option value="promo">Promotional Content</option>
                          <option value="website">Website Support</option>
                          <option value="growth">Business Growth Support</option>
                          <option value="ops">Operational Coordination</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[#666] text-xs uppercase tracking-wide block mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your business and what you're looking for..."
                        className={inputClass + ' resize-none'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending...' : (
                        <>Send Message <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
