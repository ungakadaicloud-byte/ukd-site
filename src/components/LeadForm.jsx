import { useState } from 'react'
import { submitLead } from '../lib/supabase'

export default function LeadForm({ product, ctaLabel, statusValue, accentClass }) {
  const [form, setForm] = useState({ name: '', phone: '', town: '', message: '' })
  const [state, setState] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setState('error')
      setErrorMsg('Name and phone number are required.')
      return
    }
    setState('submitting')
    try {
      await submitLead({
        product: product.slug,
        name: form.name.trim(),
        phone: form.phone.trim(),
        town: form.town.trim(),
        message: form.message.trim(),
        status: statusValue,
      })
      setState('success')
    } catch (err) {
      setState('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-sm border border-teal/40 bg-teal/10 p-6 text-center">
        <p className="font-sign font-semibold text-paper mb-1">Request received.</p>
        <p className="text-sm text-paper/70">
          We'll reach out on {form.phone} shortly. நன்றி!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="signboard rounded-sm p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-paper/50 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-ink border border-ink-border rounded-sm px-3 py-2 text-paper placeholder:text-paper/30 focus:border-gold outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-paper/50 mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-ink border border-ink-border rounded-sm px-3 py-2 text-paper placeholder:text-paper/30 focus:border-gold outline-none"
            placeholder="10-digit mobile number"
          />
        </div>
      </div>
      <div>
        <label htmlFor="town" className="block text-xs uppercase tracking-wider text-paper/50 mb-1">
          Town / Area
        </label>
        <input
          id="town"
          name="town"
          value={form.town}
          onChange={handleChange}
          className="w-full bg-ink border border-ink-border rounded-sm px-3 py-2 text-paper placeholder:text-paper/30 focus:border-gold outline-none"
          placeholder="e.g. Namakkal"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-paper/50 mb-1">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-ink border border-ink-border rounded-sm px-3 py-2 text-paper placeholder:text-paper/30 focus:border-gold outline-none resize-none"
          placeholder="Anything you'd like us to know"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-brick">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className={`w-full font-sign font-semibold rounded-sm py-3 transition-colors disabled:opacity-50 ${accentClass}`}
      >
        {state === 'submitting' ? 'Sending…' : ctaLabel}
      </button>
    </form>
  )
}
