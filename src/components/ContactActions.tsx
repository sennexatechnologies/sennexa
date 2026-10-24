import { Link } from 'react-router'
import { site } from '../content/site'
import { track } from '../lib/analytics'
import { btn, type BtnVariant } from './ui'
import { ArrowRight, Chat, Mail } from './icons'

export function StartProjectButton({ className = '', label = 'Start a Project' }: { className?: string; label?: string }) {
  return (
    <Link to="/contact" className={btn('primary', className)}>
      {label}
      <ArrowRight className="size-4" />
    </Link>
  )
}

export function WhatsAppButton({
  variant = 'outline',
  className = '',
}: {
  variant?: BtnVariant
  className?: string
}) {
  const number = site.whatsappNumber.replace(/\D/g, '')

  if (!number) {
    
    return (
      <button
        type="button"
        aria-disabled="true"
        aria-describedby="wa-pending"
        className={`${btn(variant, className)} cursor-not-allowed opacity-70`}
      >
        <Chat className="size-4" />
        WhatsApp
        <span className="t-eyebrow rounded-full border border-current/40 px-2 py-0.5 text-[0.625rem]" id="wa-pending">
          +254 795 451 238
        </span>
      </button>
    )
  }

  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(site.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('whatsapp_click')}
      className={btn(variant, className)}
    >
      <Chat className="size-4" />
      WhatsApp us
    </a>
  )
}

export function EmailLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={`mailto:${site.email}`}
      onClick={() => track('email_click')}
      className={`inline-flex items-center gap-2 break-all ${className}`}
    >
      <Mail className="size-4 shrink-0" />
      {site.email}
    </a>
  )
}
