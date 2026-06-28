'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/config'

const SERVICES = [
  'Garden Maintenance',
  'Landscape Support',
  'Irrigation System',
  'Pesticides Supply',
  'Seeds & Fertilizers',
  'Gardening Tools',
  'Agricultural Equipment',
  'General Inquiry',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message from form
    const msg = `Hello Ibn Bashir Trading,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService/Product: ${form.service}\n\nMessage: ${form.message}`
    const url = getWhatsAppUrl(msg)
    window.open(url, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4 text-center border border-cream-dark">
        <div className="w-14 h-14 bg-leaf/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-leaf-dark" />
        </div>
        <h3 className="font-display font-bold text-forest-dark text-xl">Message Ready on WhatsApp</h3>
        <p className="text-charcoal/60 text-sm font-body leading-relaxed max-w-xs">
          Your message has been prepared and WhatsApp has been opened. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline text-sm mt-2"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-cream-dark flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/50">Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream-light"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/50">Phone *</label>
          <input
            type="tel"
            required
            placeholder="+968 XXXX XXXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream-light"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/50">Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream-light"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/50">Service / Product Needed *</label>
        <select
          required
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream-light appearance-none"
        >
          <option value="">Select a service or product</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-body font-semibold tracking-widest uppercase text-charcoal/50">Message *</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your project or what you need..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors bg-cream-light resize-none"
        />
      </div>
      <button type="submit" className="btn-primary justify-center py-3.5 text-sm">
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-charcoal/40 text-center font-body">
        Submitting will open WhatsApp with your message pre-filled.
      </p>
    </form>
  )
}
