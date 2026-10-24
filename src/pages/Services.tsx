import { Link } from 'react-router'
import { services } from '../content/site'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import CtaSection from '../components/CtaSection'
import ProcessSection from '../components/ProcessSection'
import { Eyebrow, Reveal } from '../components/ui'
import { ArrowRight, Check } from '../components/icons'
import { StartProjectButton } from '../components/ContactActions'

export default function Services() {
  useSeo(
    'Services',
    'Websites and software, search visibility, design and branding, and digital systems from Sennexa Technologies.',
    '/services',
  )
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four services that work as one system."
        lead="Start with the one that matches your most pressing problem. Because design, engineering and marketing sit together, each one makes the others more effective."
      >
        <StartProjectButton />
      </PageHero>

      <section className="surface-light section" aria-label="Service overview">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article className="grid gap-8 rounded-[20px] border border-line-light bg-white p-7 shadow-soft sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
                <div>
                  <p className="t-eyebrow text-ink-muted">
                    0{i + 1} ·{' '}
                    <span className={s.status === 'Core offering' ? 'text-blue-700' : 'text-warning'}>{s.status}</span>
                  </p>
                  <h2 className="t-h2 mt-4 text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)]">{s.title}</h2>
                  <p className="mt-4 text-ink-muted">{s.problem}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-7 inline-flex min-h-11 items-center gap-2 font-medium text-blue-700 hover:underline"
                  >
                    Explore {s.title.toLowerCase()} <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div>
                  <h3 className="t-eyebrow text-ink-muted">What we deliver</h3>
                  <ul className="mt-4 space-y-3">
                    {s.deliver.slice(0, 4).map((d) => (
                      <li key={d} className="flex gap-3 text-[0.9375rem] text-ink">
                        <Check className="mt-0.5 size-5 shrink-0 text-blue-700" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <p className="pt-4 text-center text-sm text-ink-muted">
              <Eyebrow className="inline">Note</Eyebrow>
              {'  '}Digital Systems &amp; Automation is delivered as custom engagements after discovery, not as a packaged product.
            </p>
          </Reveal>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  )
}
