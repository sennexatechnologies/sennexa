import { Link } from 'react-router'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import CtaSection from '../components/CtaSection'
import { Eyebrow, Reveal, btn } from '../components/ui'
import { StartProjectButton } from '../components/ContactActions'

const format = [
  ['Client or project', 'Named only where the client has authorised it.'],
  ['The brief', 'The business problem, in the client’s terms.'],
  ['Scope of work', 'Exactly what Sennexa was responsible for.'],
  ['Approach', 'Technology or creative decisions that mattered, and why.'],
  ['Deliverables', 'What was handed over at the end.'],
  ['Verified results', 'Only measurable outcomes the client has confirmed.'],
]

export default function Work() {
  useSeo(
    'Work',
    'How Sennexa Technologies presents project work: the brief, scope, approach, deliverables and verifiable results.',
    '/work',
  )
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case studies that show the work, not just the result."
        lead="Each project is documented in one consistent format so you can judge capability on evidence. Portfolio content is being prepared and will be published only with client authorisation."
      >
        <StartProjectButton />
        <Link to="/services" className={btn('outline')}>
          See our services
        </Link>
      </PageHero>

      <section className="surface-light section" aria-labelledby="format-title">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-blue-700">The format</Eyebrow>
            <h2 id="format-title" className="t-h2 mt-4">
              What every case study will contain.
            </h2>
            <p className="mt-5 text-ink-muted">
              No fictional clients, no invented metrics and no testimonials we cannot verify.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="divide-y divide-line-light border-y border-line-light">
              {format.map(([t, d], i) => (
                <div key={t} className="grid gap-1 py-5 sm:grid-cols-[3rem_12rem_1fr] sm:gap-4">
                  <dt className="contents">
                    <span className="t-eyebrow pt-1 text-ink-muted">0{i + 1}</span>
                    <span className="font-display text-lg font-semibold tracking-tight">{t}</span>
                  </dt>
                  <dd className="text-ink-muted">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="surface-navy section" aria-labelledby="slots-title">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-blue-300">Portfolio slots</Eyebrow>
            <h2 id="slots-title" className="t-h2 mt-4">
              Reserved for authorised projects.
            </h2>
            <p className="t-lead mt-5 text-on-dark-muted">
              Each is replaced by a real case study once project assets and
              permissions are supplied.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <li key={n}>
                <Reveal delay={n * 70}>
                  <article className="overflow-hidden rounded-[20px] border border-line-dark bg-obsidian/60">
                    <div className="relative flex aspect-[16/9] items-center justify-center border-b border-dashed border-silver/30 p-6 text-center">
                      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
                      <p className="t-eyebrow relative text-silver">Project visual · pending</p>
                    </div>
                    <div className="p-7">
                      <p className="t-eyebrow text-[#f0b36a]">Case study {n} · Business receipt</p>
                      <h3 className="t-h3 mt-3">GAO Business Receipt</h3>
                      <p className="mt-3 text-[0.9375rem] text-on-dark-muted">
                        Brief, scope, approach, deliverables and verified results will appear here.
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
