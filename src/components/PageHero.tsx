import type { ReactNode } from 'react'
import { Eyebrow } from './ui'

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lead: string
  children?: ReactNode
}) {
  return (
    <section className="surface-dark relative overflow-hidden pb-16 pt-[calc(var(--header-h)+4.5rem)] sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-blue pointer-events-none absolute -right-24 -top-24 size-[34rem] opacity-70"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Eyebrow className="rise text-blue-300">{eyebrow}</Eyebrow>
        <h1 className="t-h1 rise mt-5 max-w-3xl [animation-delay:80ms]">{title}</h1>
        <p className="t-lead rise mt-6 max-w-2xl text-on-dark-muted [animation-delay:160ms]">{lead}</p>
        {children && <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  )
}
