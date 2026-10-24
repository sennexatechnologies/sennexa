import { StartProjectButton, WhatsAppButton } from './ContactActions'
import { Eyebrow, Reveal } from './ui'

export default function CtaSection() {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgb(38_123_255/0.35),transparent)]"
        aria-hidden="true"
      />
      <div className="container-x relative py-[calc(var(--section-y)*0.9)]">
        <Reveal>
          <Eyebrow className="text-blue-300">Next step</Eyebrow>
          <h2 className="t-h1 mt-5 max-w-3xl">Let&apos;s engineer your next stage of growth.</h2>
          <p className="t-lead mt-6 max-w-xl text-on-dark-muted">
            Tell us what your organisation needs to build, improve or achieve.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <StartProjectButton />
            <WhatsAppButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
