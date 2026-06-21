import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface FormData {
  name: string
  phone: string
  guests: string
  attending: 'yes' | 'no' | ''
  dietary: string
}

const empty: FormData = { name: '', phone: '', guests: '1', attending: '', dietary: '' }

export default function RSVP() {
  const { ref, visible } = useScrollAnimation()
  const { t } = useLang()
  const f = t.rsvp.fields
  const [form, setForm] = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.name.trim()) e.name = t.rsvp.errors.name
    if (!form.phone.trim()) e.phone = t.rsvp.errors.phone
    if (!form.attending) e.attending = t.rsvp.errors.attending
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const inputClass =
    'w-full bg-white/60 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3 font-sans text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/10 transition-all duration-300'

  return (
    <section
      id="rsvp"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FEFDF8, #F7E7CE)' }}
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blush/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-lg mx-auto relative">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">{t.rsvp.label}</p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">{t.rsvp.title}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
          <p className="font-serif italic text-muted mt-4 text-sm">{t.rsvp.deadline}</p>
        </div>

        {/* Card */}
        <div
          className={`bg-white/50 backdrop-blur-md rounded-3xl p-8 shadow-card border border-gold/15 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {submitted ? (
            <SuccessMessage
              name={form.name}
              attending={form.attending as 'yes' | 'no'}
              onReset={() => { setSubmitted(false); setForm(empty) }}
            />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              {/* Name */}
              <Field label={f.name} id="name" required error={errors.name}>
                <input id="name" type="text" className={inputClass} placeholder={f.namePlaceholder}
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }) }} />
              </Field>

              {/* Phone */}
              <Field label={f.phone} id="phone" required error={errors.phone}>
                <input id="phone" type="tel" className={inputClass} placeholder={f.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: undefined }) }} />
              </Field>

              {/* Guests */}
              <Field label={f.guests} id="guests">
                <select id="guests" className={inputClass} value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{f.guestLabel(n)}</option>
                  ))}
                </select>
              </Field>

              {/* Attending */}
              <Field label={f.attending} id="attending" required error={errors.attending}>
                <div className="flex gap-3">
                  {(['yes', 'no'] as const).map((v) => (
                    <label key={v}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all duration-300 font-sans text-sm ${
                        form.attending === v
                          ? v === 'yes' ? 'bg-gold text-white border-gold shadow-gold' : 'bg-stone-400 text-white border-stone-400'
                          : 'bg-white/60 border-gold/20 text-muted hover:border-gold/40'
                      }`}>
                      <input type="radio" name="attending" value={v} className="sr-only"
                        checked={form.attending === v}
                        onChange={() => { setForm({ ...form, attending: v }); setErrors({ ...errors, attending: undefined }) }} />
                      {v === 'yes' ? f.accept : f.decline}
                    </label>
                  ))}
                </div>
              </Field>

              {/* Dietary */}
              <Field label={f.dietary} id="dietary">
                <textarea id="dietary" className={`${inputClass} resize-none h-20`}
                  placeholder={f.dietaryPlaceholder}
                  value={form.dietary}
                  onChange={(e) => setForm({ ...form, dietary: e.target.value })} />
              </Field>

              <button type="submit" disabled={loading}
                className="mt-2 w-full py-4 rounded-xl bg-gold-gradient text-white font-sans text-sm tracking-widest uppercase shadow-gold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {f.sending}
                  </span>
                ) : f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, required, children, error }: {
  label: string; id: string; required?: boolean; children: React.ReactNode; error?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-sans text-xs tracking-widest uppercase text-muted">
        {label}{required && <span className="text-blush-dark ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400 font-sans">{error}</p>}
    </div>
  )
}

function SuccessMessage({ name, attending, onReset }: { name: string; attending: 'yes' | 'no'; onReset: () => void }) {
  const { t } = useLang()
  const s = t.rsvp.success

  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center animate-fade-up">
      <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-4xl animate-float">
        {attending === 'yes' ? '🎉' : '💌'}
      </div>
      <div>
        <h3 className="font-script text-4xl text-gold-dark mb-2">
          {attending === 'yes' ? s.titleYes : s.titleNo}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed">
          {attending === 'yes' ? s.yes(name) : s.no(name)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-gold/40" />
        <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
        </svg>
        <div className="w-8 h-px bg-gold/40" />
      </div>
      <button onClick={onReset} className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
        {s.reset}
      </button>
    </div>
  )
}
