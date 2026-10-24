import { useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { services, site } from '../content/site'
import { track } from '../lib/analytics'
import { btn } from './ui'
import { Alert, ArrowRight, Check } from './icons'

type Values = {
  name: string
  organisation: string
  email: string
  phone: string
  service: string
  message: string
  budget: string
  timeline: string
  consent: boolean
  website: string // honeypot: must stay empty
}
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'submitting' | 'success' | 'unavailable' | 'error'

const initial: Values = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  budget: '',
  timeline: '',
  consent: false,
  website: '',
}

// Set VITE_ENQUIRY_ENDPOINT when the backend is connected. Until then the form validates
// but cannot deliver, and says so clearly instead of pretending to submit.
const ENDPOINT = (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined) ?? ''

const budgets = [
  'Not sure yet',
  'Starter: a focused single deliverable',
  'Growth: multi-page or multi-channel work',
  'Programme: ongoing or multi-phase work',
]
const timelines = ['Flexible', 'Within 1 month', '1 to 3 months', '3 months or more']

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (v.organisation.trim().length < 2) e.organisation = 'Please enter your organisation.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,19}$/.test(v.phone.trim()))
    e.phone = 'Use digits, spaces and an optional leading +.'
  if (!v.service) e.service = 'Please choose the service you are interested in.'
  if (v.message.trim().length < 20) e.message = 'Please tell us a little more (at least 20 characters).'
  if (!v.consent) e.consent = 'Please confirm you have read the privacy notice.'
  return e
}

const field =
  'block w-full min-h-11 rounded-[10px] border bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-ink-muted/70 transition-colors focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/30'

function Field({
  k,
  label,
  optional,
  error,
  children,
}: {
  k: string
  label: string
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={k} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-ink-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${k}-err`} className="mt-1.5 flex items-start gap-1.5 text-sm text-danger">
          <Alert className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function EnquiryForm() {
  const [v, setV] = useState<Values>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const set = <K extends keyof Values>(k: K, val: Values[K]) => setV((p) => ({ ...p, [k]: val }))
  const blur = (k: keyof Values) => {
    const next = validate(v)[k]
    setErrors((p) => ({ ...p, [k]: next }))
  }

  const mailto = () => {
    const body = [
      `Name: ${v.name}`,
      `Organisation: ${v.organisation}`,
      `Email: ${v.email}`,
      v.phone ? `Phone: ${v.phone}` : null,
      `Service: ${v.service}`,
      v.budget ? `Budget: ${v.budget}` : null,
      v.timeline ? `Timeline: ${v.timeline}` : null,
      '',
      v.message,
    ]
      .filter((l) => l !== null)
      .join('\n')
    return `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const found = validate(v)
    setErrors(found)
    const firstKey = Object.keys(found)[0]
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus()
      return
    }
    if (v.website) return // bot: silently stop, nothing real is lost

    track('enquiry_submitted')
    if (!ENDPOINT) {
      setStatus('unavailable')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...v, website: undefined }),
      })
      if (!res.ok) throw new Error(String(res.status))
      track('enquiry_delivered')
      setStatus('success')
    } catch {
      track('enquiry_failed')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-[20px] border border-line-light bg-white p-8 shadow-soft sm:p-10">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-success/10 text-success">
          <Check className="size-6" />
        </span>
        <h2 className="t-h3 mt-6 text-ink">Thank you. Your enquiry has been received.</h2>
        <p className="mt-3 max-w-md text-ink-muted">
          We will review it and reply to {v.email} to arrange a discovery conversation if it looks like a good fit.
        </p>
        <Link to="/" className={btn('outlineLight', 'mt-8')}>
          Back to home
        </Link>
      </div>
    )
  }

  const err = (k: keyof Values) => (errors[k] ? `${k}-err` : undefined)
  const border = (k: keyof Values) => (errors[k] ? 'border-danger' : 'border-line-light hover:border-ink/30')

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-describedby="form-note"
      className="rounded-[20px] border border-line-light bg-white p-6 shadow-soft sm:p-10"
    >
      <h2 className="t-h3 text-ink">Tell us about your project</h2>
      <p id="form-note" className="mt-2 text-sm text-ink-muted">
        A few details are enough to start. We will reply by email.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field k="name" label="Name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" value={v.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')} aria-invalid={!!errors.name} aria-describedby={err('name')} className={`${field} ${border('name')}`} />
        </Field>
        <Field k="organisation" label="Organisation" error={errors.organisation}>
          <input id="organisation" name="organisation" autoComplete="organization" value={v.organisation} onChange={(e) => set('organisation', e.target.value)} onBlur={() => blur('organisation')} aria-invalid={!!errors.organisation} aria-describedby={err('organisation')} className={`${field} ${border('organisation')}`} />
        </Field>
        <Field k="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={v.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')} aria-invalid={!!errors.email} aria-describedby={err('email')} className={`${field} ${border('email')}`} />
        </Field>
        <Field k="phone" label="Telephone" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={v.phone} onChange={(e) => set('phone', e.target.value)} onBlur={() => blur('phone')} aria-invalid={!!errors.phone} aria-describedby={err('phone')} className={`${field} ${border('phone')}`} />
        </Field>
        <div className="sm:col-span-2">
          <Field k="service" label="Service required" error={errors.service}>
            <select id="service" name="service" value={v.service} onChange={(e) => set('service', e.target.value)} onBlur={() => blur('service')} aria-invalid={!!errors.service} aria-describedby={err('service')} className={`${field} ${border('service')}`}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Not sure yet">I am not sure yet</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field k="message" label="Project description" error={errors.message}>
            <textarea id="message" name="message" rows={5} value={v.message} onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')} aria-invalid={!!errors.message} aria-describedby={err('message')} placeholder="What do you need to build, improve or achieve?" className={`${field} ${border('message')} resize-y`} />
          </Field>
        </div>
        <Field k="budget" label="Budget range" optional error={errors.budget}>
          <select id="budget" name="budget" value={v.budget} onChange={(e) => set('budget', e.target.value)} className={`${field} ${border('budget')}`}>
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field k="timeline" label="Desired timeline" optional error={errors.timeline}>
          <select id="timeline" name="timeline" value={v.timeline} onChange={(e) => set('timeline', e.target.value)} className={`${field} ${border('timeline')}`}>
            <option value="">Select a timeline</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            name="consent"
            checked={v.consent}
            onChange={(e) => set('consent', e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={err('consent')}
            className="mt-0.5 size-5 shrink-0 accent-blue-700"
          />
          <span>
            I have read the{' '}
            <Link to="/privacy" className="font-medium text-blue-700 underline underline-offset-2">
              privacy notice
            </Link>{' '}
            and agree that Sennexa may use these details to respond to my enquiry.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-err" className="mt-1.5 flex items-start gap-1.5 text-sm text-danger">
            <Alert className="mt-0.5 size-4 shrink-0" />
            {errors.consent}
          </p>
        )}
      </div>

      {status === 'unavailable' && (
        <div role="alert" className="mt-6 rounded-[12px] border border-warning/40 bg-warning/[0.07] p-4 text-sm text-ink">
          <p className="flex items-center gap-2 font-semibold text-warning">
            <Alert className="size-4" />
            Preview build: enquiry delivery is not connected yet
          </p>
          <p className="mt-2 text-ink-muted">
            Your message has <strong className="text-ink">not</strong> been sent. You can email it to us directly instead.
          </p>
          <a href={mailto()} onClick={() => track('email_click')} className="mt-3 inline-block font-medium text-blue-700 underline underline-offset-2">
            Open a pre-filled email to {site.email}
          </a>
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="mt-6 rounded-[12px] border border-danger/40 bg-danger/[0.06] p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-danger">
            <Alert className="size-4" />
            We could not send your enquiry
          </p>
          <p className="mt-2 text-ink-muted">
            Please try again, or email us at{' '}
            <a href={mailto()} className="font-medium text-blue-700 underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className={btn('primary', 'mt-8 w-full disabled:opacity-60 sm:w-auto')}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
        <ArrowRight className="size-4" />
      </button>
    </form>
  )
}
