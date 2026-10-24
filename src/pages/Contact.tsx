import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import EnquiryForm from '../components/EnquiryForm'
import { EmailLink, WhatsAppButton } from '../components/ContactActions'
import { Eyebrow } from '../components/ui'

export default function Contact() {
  useSeo(
    'Contact',
    'Start a project with Sennexa Technologies. Send an enquiry, email us or message us on WhatsApp.',
    '/contact',
  )
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build, improve or achieve."
        lead="A few details are enough to start. We will review your enquiry and reply by email."
      />

      <section className="surface-light pb-[var(--section-y)] pt-12 sm:pt-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <EnquiryForm />

          <aside className="space-y-8 lg:sticky lg:top-28" aria-label="Other ways to reach us">
            <div>
              <Eyebrow className="text-blue-700">Prefer to write directly?</Eyebrow>
              <p className="mt-4 text-ink">
                <EmailLink className="font-medium text-blue-700 underline underline-offset-2" />
              </p>
              <div className="mt-4">
                <WhatsAppButton variant="outlineLight" />
              </div>
            </div>

            <div className="border-t border-line-light pt-8">
              <Eyebrow className="text-ink-muted">What happens next</Eyebrow>
              <ol className="mt-5 space-y-5">
                {[
                  ['We review', 'We read your enquiry and check it is something we can help with.'],
                  ['We reply by email', 'If it is a fit, we suggest a discovery conversation.'],
                  ['We scope in writing', 'You receive deliverables, timeline and cost for approval before any work begins.'],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="t-eyebrow pt-1 text-blue-700">0{i + 1}</span>
                    <div>
                      <p className="font-display font-semibold tracking-tight">{t}</p>
                      <p className="mt-1 text-sm text-ink-muted">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
