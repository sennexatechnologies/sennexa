import { site } from '../content/site'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import CtaSection from '../components/CtaSection'
import ProcessSection from '../components/ProcessSection'
import { Eyebrow, Reveal } from '../components/ui'
import { StartProjectButton } from '../components/ContactActions'

const principles = [
  ['Connected, not siloed', 'Software, design, marketing and search visibility are planned together so each supports the others.'],
  ['Commercial first', 'Every project starts with what it needs to achieve for the organisation, then decides how to build it.'],
  ['Precise and honest', 'We say plainly what is realistic, what depends on factors we cannot control, and when something is not worth doing.'],
  ['Built to last', 'Maintainable code, reusable design systems and clear documentation, so your site keeps working after launch.'],
]

export default function About() {
  useSeo(
    'About',
    'Sennexa Technologies is a technology and digital growth company combining software, design, digital marketing and search visibility.',
    '/about',
  )
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Revenue engineering, built on connected disciplines."
        lead="Sennexa Technologies combines software, design, digital marketing and search visibility to help organisations attract customers, improve operations and grow."
      >
        <StartProjectButton />
      </PageHero>

      <section className="surface-light section" aria-labelledby="mission-title">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-blue-700">Mission</Eyebrow>
            <h2 id="mission-title" className="t-h2 mt-4">
              Technology should earn its place in the business.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="t-lead text-ink">
              Too many organisations own a website, a social account and a few tools that never quite work together.
              We exist to connect them into something that reaches the right people, makes it easy to say yes, and
              keeps running without constant manual effort.
            </p>
            <p className="mt-6 text-ink-muted">
              &ldquo;{site.slogan}&rdquo; describes how we build: systems designed to keep working for you. It is not a
              promise of round-the-clock staffing, and any support arrangements are agreed in writing, per project.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <ul className="grid border-l border-t border-line-light sm:grid-cols-2">
            {principles.map(([t, d], i) => (
              <li key={t} className="border-b border-r border-line-light">
                <Reveal delay={(i % 2) * 80} className="h-full p-7 sm:p-9">
                  <p className="t-eyebrow text-ink-muted">0{i + 1}</p>
                  <h3 className="t-h3 mt-4">{t}</h3>
                  <p className="mt-3 text-ink-muted">{d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />

      <section className="surface-light section" aria-labelledby="claims-title">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-blue-700">Our standards</Eyebrow>
            <h2 id="claims-title" className="t-h2 mt-4">
              What we will not claim.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="divide-y divide-line-light border-y border-line-light">
              {[
                'Guaranteed search rankings or revenue increases',
                'Client names, results or testimonials we cannot verify',
                'Team size, offices or credentials we do not hold',
                'Round-the-clock human support unless it has been agreed for your project',
              ].map((c) => (
                <li key={c} className="py-4 text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
