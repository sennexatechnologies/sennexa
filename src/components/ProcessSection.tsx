import { process } from '../content/site'
import { Eyebrow, Reveal } from './ui'

export default function ProcessSection({ tone = 'navy' }: { tone?: 'navy' | 'dark' }) {
  return (
    <section className={`${tone === 'navy' ? 'surface-navy' : 'surface-dark'} section`} aria-labelledby="process-title">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-blue-300">04 / How we work</Eyebrow>
          <h2 id="process-title" className="t-h2 mt-4">
            Four stages. Clear outputs at every one.
          </h2>
          <p className="t-lead mt-5 text-on-dark-muted">
            You always know where the project stands, what has been agreed and what happens next.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={i * 90}>
                <div className="relative h-px w-full bg-line-dark">
                  <div className="line-grow absolute inset-0 bg-blue" />
                </div>
                <p className="t-eyebrow mt-5 text-blue-300">{step.n}</p>
                <h3 className="t-h3 mt-3">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-on-dark-muted">{step.text}</p>
                <ul className="mt-5 space-y-2 border-t border-line-dark pt-5 text-sm text-silver">
                  {step.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-blue" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
