import { useState } from 'react'
import { Link } from 'react-router'
import { faqs, industries, reasons, services, site } from '../content/site'
import { useSeo } from '../lib/hooks'
import RevenueNetwork, { networkLegend } from '../components/RevenueNetwork'
import { StartProjectButton } from '../components/ContactActions'
import ProcessSection from '../components/ProcessSection'
import CtaSection from '../components/CtaSection'
import Faq from '../components/Faq'
import { btn, Eyebrow, Reveal } from '../components/ui'
import { ArrowRight } from '../components/icons'

function Hero() {
  return (
    <section className="surface-dark relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+5rem)]">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line-dark bg-white/[0.03] py-1.5 pl-3 pr-4 t-eyebrow text-silver">
            <span className="pulse-dot size-2 rounded-full bg-blue" aria-hidden="true" />
            {site.slogan}
          </p>
          <h1 className="t-display rise mt-7 [animation-delay:90ms]">
            Technology that moves your business <span className="text-blue">forward.</span>
          </h1>
          <p className="t-lead rise mt-7 max-w-xl text-on-dark-muted [animation-delay:180ms]">
            We build digital experiences and systems that help organisations reach customers, operate smarter and grow.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:270ms]">
            <StartProjectButton />
            <Link to="/work" className={btn('outline')}>
              Explore Our Work
            </Link>
          </div>
          <dl className="rise mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-line-dark pt-6 text-sm [animation-delay:360ms] sm:grid-cols-4">
            {['Websites', 'Search visibility', 'Brand & design', 'Automation'].map((d) => (
              <div key={d}>
                <dt className="sr-only">Capability</dt>
                <dd className="t-eyebrow text-silver">{d}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[34rem] lg:max-w-none">
          <RevenueNetwork />
          <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2 lg:hidden" aria-label="What the Revenue Network represents">
            {networkLegend.map(([t, d]) => (
              <li key={t} className="text-mist">
                <span className="font-medium text-white">{t}.</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="surface-light section" aria-labelledby="cap-title">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow className="text-blue-700">01 / Capabilities</Eyebrow>
          <h2 id="cap-title" className="t-h2 mt-4">
            Four connected capabilities. One commercial purpose.
          </h2>
          <p className="t-lead mt-5 text-ink-muted">
            Each service stands alone, and each works harder alongside the others. We explain them through the business
            problem they solve.
          </p>
        </Reveal>

        <ul className="border-t border-line-light">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line-light">
              <Reveal delay={i * 60}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group grid gap-4 py-9 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
                >
                  <span className="t-eyebrow pt-1.5 text-ink-muted">0{i + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="t-h3 transition-colors group-hover:text-blue-700">{s.title}</h3>
                      <span
                        className={`t-eyebrow rounded-full border px-2.5 py-1 text-[0.625rem] ${
                          s.status === 'Core offering'
                            ? 'border-blue-700/30 text-blue-700'
                            : 'border-warning/40 text-warning'
                        }`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-ink-muted">{s.short}</p>
                    <p className="mt-4 text-sm font-medium text-ink">
                      <span className="text-ink-muted">Business benefit: </span>
                      {s.benefit}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-blue-700 sm:self-center">
                    <span className="sm:sr-only">Explore</span>
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SelectedWork() {
  const fields = ['Client / project', 'The brief', 'Scope of work', 'Approach', 'Deliverables', 'Verified results']
  return (
    <section className="surface-navy section" aria-labelledby="work-title">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow className="text-blue-300">02 / Selected work</Eyebrow>
            <h2 id="work-title" className="t-h2 mt-4">
              Evidence, presented the same way every time.
            </h2>
            <p className="t-lead mt-5 text-on-dark-muted">
              Every case study follows one format: the problem, what we did, what was delivered and what can be
              verified. We would rather show fewer projects well than invent any.
            </p>
          </div>
          <Link to="/work" className={btn('link', 'shrink-0')}>
            How we present work <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Reveal className="mt-14">
          <article className="grid overflow-hidden rounded-[20px] border border-line-dark bg-obsidian/60 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative flex min-h-72 items-center justify-center border-b border-line-dark p-8 lg:border-b-0 lg:border-r">
              <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative w-full max-w-md overflow-hidden rounded-[12px] border border-dashed border-silver/40">
                <div className="flex items-center gap-1.5 border-b border-dashed border-silver/30 px-3 py-2.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-silver/40" />
                  <span className="size-2 rounded-full bg-silver/40" />
                  <span className="size-2 rounded-full bg-silver/40" />
                </div>
                <div className="flex aspect-[16/10] items-center justify-center p-6 text-center">
                  <p className="t-eyebrow text-silver">Authorised project screenshot goes here</p>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <p className="t-eyebrow inline-block rounded-full border border-warning/50 bg-warning/10 px-3 py-1 text-[0.625rem] text-[#f0b36a]">
                Placeholder structure · awaiting authorised project
              </p>
              <h3 className="t-h3 mt-5">Case study title</h3>
              <dl className="mt-6 divide-y divide-line-dark border-y border-line-dark">
                {fields.map((f) => (
                  <div key={f} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3 text-sm">
                    <dt className="text-silver">{f}</dt>
                    <dd className="text-mist">To be supplied by Sennexa</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function Solutions() {
  const [active, setActive] = useState(0)
  const ind = industries[active]
  return (
    <section className="surface-light section" aria-labelledby="sol-title">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-blue-700">03 / Solutions by industry</Eyebrow>
          <h2 id="sol-title" className="t-h2 mt-4">
            Different organisations need different outcomes.
          </h2>
          <p className="t-lead mt-5 text-ink-muted">
            Choose the pathway closest to you to see the needs we focus on and what we typically build.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div
            role="tablist"
            aria-label="Industries"
            aria-orientation="vertical"
            className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-line-light lg:px-0"
          >
            {industries.map((x, i) => {
              const on = i === active
              return (
                <button
                  key={x.id}
                  role="tab"
                  type="button"
                  id={`tab-${x.id}`}
                  aria-selected={on}
                  aria-controls="industry-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                      e.preventDefault()
                      const n = (i + 1) % industries.length
                      setActive(n)
                      document.getElementById(`tab-${industries[n].id}`)?.focus()
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                      e.preventDefault()
                      const n = (i - 1 + industries.length) % industries.length
                      setActive(n)
                      document.getElementById(`tab-${industries[n].id}`)?.focus()
                    }
                  }}
                  className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-left transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-line-light lg:px-0 lg:py-5 ${
                    on
                      ? 'border-ink bg-ink text-white lg:bg-transparent lg:text-ink'
                      : 'border-line-light text-ink-muted hover:text-ink'
                  }`}
                >
                  <span className="block font-display text-lg font-semibold tracking-tight lg:text-2xl">{x.title}</span>
                  <span className="hidden text-sm lg:block">{x.blurb}</span>
                </button>
              )
            })}
          </div>

          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`tab-${ind.id}`}
            tabIndex={0}
            className="rounded-[20px] border border-line-light bg-white p-7 shadow-soft sm:p-10"
          >
            <p className="t-eyebrow text-blue-700">{ind.blurb}</p>
            <p className="t-lead mt-4 text-ink">{ind.need}</p>
            <h3 className="t-eyebrow mt-8 text-ink-muted">What we typically build</h3>
            <ul className="mt-4 space-y-3">
              {ind.build.map((b) => (
                <li key={b} className="flex gap-3 text-ink-muted">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-700" />
                  {b}
                </li>
              ))}
            </ul>
            <Link to={`/solutions#${ind.id}`} className="mt-8 inline-flex items-center gap-2 font-medium text-blue-700 hover:underline">
              See the full pathway <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="surface-dark section" aria-labelledby="why-title">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow className="text-blue-300">05 / Why Sennexa</Eyebrow>
          <h2 id="why-title" className="t-h2 mt-4">
            What you can rely on when you work with us.
          </h2>
          <p className="t-lead mt-5 text-on-dark-muted">
            Specific commitments about how we work, rather than claims about how big we are.
          </p>
        </Reveal>
        <ul className="grid border-l border-t border-line-dark sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.title} className="border-b border-r border-line-dark">
              <Reveal delay={(i % 2) * 80} className="h-full p-7 sm:p-8">
                <p className="t-eyebrow text-blue-300">0{i + 1}</p>
                <h3 className="t-h3 mt-4 text-[1.2rem]">{r.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-on-dark-muted">{r.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="surface-light section" aria-labelledby="faq-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow className="text-blue-700">06 / Questions</Eyebrow>
          <h2 id="faq-title" className="t-h2 mt-4">
            Straight answers before you get in touch.
          </h2>
          <p className="mt-5 text-ink-muted">
            Something not covered here?{' '}
            <Link to="/contact" className="font-medium text-blue-700 underline underline-offset-2">
              Ask us directly
            </Link>
            .
          </p>
        </Reveal>
        <Reveal>
          <Faq items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  useSeo(
    site.name,
    'Sennexa Technologies builds websites, digital systems and search visibility that help organisations reach customers, operate smarter and grow.',
    '/',
  )
  return (
    <>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <Solutions />
      <ProcessSection />
      <Why />
      <CtaSection />
      <FaqSection />
    </>
  )
}
