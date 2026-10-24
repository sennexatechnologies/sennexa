import { useState } from 'react'
import { Plus } from './icons'

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-line-light border-y border-line-light">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
              >
                {item.q}
                <Plus
                  className={`size-5 shrink-0 text-blue-700 transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-ink-muted">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
