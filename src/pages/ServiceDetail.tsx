import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { services } from '../content/site'
import { track } from '../lib/analytics'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import CtaSection from '../components/CtaSection'
import NotFound from './NotFound'
import { Eyebrow, Reveal } from '../components/ui'
import { ArrowRight, Check, Cross } from '../components/icons'
import { StartProjectButton } from '../components/ContactActions'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)

  useSeo(
    s ? s.seoTitle : 'Page not found',
    s ? s.seoDescription : 'This page could not be found.',
    `/services/${slug ?? ''}`,
  )
  useEffect(() => {
    if (s) track('service_view', { service: s.slug })
  }, [s])

  if (!s) return <NotFound />
  const others = services.filter((x) => x.slug !== s.slug)

  return (
    <>
      <PageHero eyebrow={`Services · ${s.status}`} title={s.title} lead={s.short}>
        <StartProjectButton label="Discuss this service" />
      </PageHero>

      <section className="surface-light section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-blue-700">The problem</Eyebrow>
            <p className="t-h3 mt-4 font-medium leading-snug">{s.problem}</p>
            <p className="mt-8 rounded-[12px] border border-line-light bg-white p-5 text-sm text-ink-muted">
              <strong className="text-ink">Worth knowing: </strong>
              {s.caveat}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="t-eyebrow text-ink-muted">What we deliver</h2>
            <ul className="mt-5 divide-y divide-line-light border-y border-line-light">
              {s.deliver.map((d) => (
                <li key={d} className="flex gap-3 py-4 text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-blue-700" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="surface-navy section" aria-labelledby="approach-title">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-blue-300">How it works</Eyebrow>
            <h2 id="approach-title" className="t-h2 mt-4">
              How we approach it.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {s.approach.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 80}>
                  <div className="h-px bg-line-dark">
                    <div className="line-grow h-px bg-blue" />
                  </div>
                  <p className="t-eyebrow mt-5 text-blue-300">0{i + 1}</p>
                  <h3 className="t-h3 mt-3 text-[1.2rem]">{a.title}</h3>
                  <p className="mt-3 text-[0.9375rem] text-on-dark-muted">{a.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="surface-light section" aria-label="Fit">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[20px] border border-line-light bg-white p-7 sm:p-9">
            <h2 className="t-h3">A good fit if</h2>
            <ul className="mt-5 space-y-3">
              {s.goodFit.map((g) => (
                <li key={g} className="flex gap-3 text-ink-muted">
                  <Check className="mt-0.5 size-5 shrink-0 text-success" />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="rounded-[20px] border border-line-light bg-white p-7 sm:p-9">
            <h2 className="t-h3">Probably not the right fit if</h2>
            <ul className="mt-5 space-y-3">
              {s.notFit.map((g) => (
                <li key={g} className="flex gap-3 text-ink-muted">
                  <Cross className="mt-0.5 size-5 shrink-0 text-ink-muted" />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <h2 className="t-eyebrow text-ink-muted">Related services</h2>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-[12px] border border-line-light bg-line-light sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="bg-paper">
                <Link
                  to={`/services/${o.slug}`}
                  className="group flex h-full items-center justify-between gap-4 p-6 font-display text-lg font-semibold tracking-tight"
                >
                  {o.title}
                  <ArrowRight className="size-5 shrink-0 text-blue-700 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
