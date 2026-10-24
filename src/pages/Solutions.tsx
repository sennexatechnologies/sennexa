import { Link } from 'react-router'
import { industries, services } from '../content/site'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import CtaSection from '../components/CtaSection'
import { Eyebrow, Reveal } from '../components/ui'
import { ArrowRight } from '../components/icons'
import { StartProjectButton } from '../components/ContactActions'

export default function Solutions() {
  useSeo(
    'Solutions',
    'Digital solutions for professional firms, hospitality businesses, institutions and growing businesses from Sennexa Technologies.',
    '/solutions',
  )
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start from your situation, not our service list."
        lead="Four pathways, each built around what that kind of organisation needs its digital presence to do."
      >
        <StartProjectButton />
      </PageHero>

      <div className="surface-light">
        {industries.map((x, i) => (
          <section
            key={x.id}
            id={x.id}
            aria-labelledby={`${x.id}-title`}
            className={`section ${i > 0 ? 'border-t border-line-light' : ''}`}
          >
            <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal className="lg:sticky lg:top-32 lg:self-start">
                <Eyebrow className="text-blue-700">
                  0{i + 1} / {x.blurb}
                </Eyebrow>
                <h2 id={`${x.id}-title`} className="t-h2 mt-4">
                  {x.title}
                </h2>
                <p className="mt-5 text-ink-muted">{x.need}</p>
              </Reveal>

              <Reveal delay={80} className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="t-eyebrow text-ink-muted">What we typically build</h3>
                  <ul className="mt-4 space-y-3">
                    {x.build.map((b) => (
                      <li key={b} className="flex gap-3 text-ink">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-700" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t-eyebrow text-ink-muted">What we would measure</h3>
                  <ul className="mt-4 space-y-3">
                    {x.measure.map((m) => (
                      <li key={m} className="flex gap-3 text-ink">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink-muted" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line-light pt-6 sm:col-span-2">
                  <h3 className="t-eyebrow text-ink-muted">Relevant services</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {x.services.map((slug) => {
                      const s = services.find((y) => y.slug === slug)!
                      return (
                        <li key={slug}>
                          <Link
                            to={`/services/${slug}`}
                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-light bg-white px-4 text-sm font-medium transition-colors hover:border-blue-700 hover:text-blue-700"
                          >
                            {s.title}
                            <ArrowRight className="size-4" />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
        <div className="container-x pb-16">
          <p className="max-w-2xl text-sm text-ink-muted">
            We measure outcomes like these so that decisions are based on evidence. We do not promise specific revenue
            increases or search rankings.
          </p>
        </div>
      </div>

      <CtaSection />
    </>
  )
}
