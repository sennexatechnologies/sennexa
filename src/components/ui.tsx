import { useEffect, useRef, useState, type ReactNode } from 'react'

export type BtnVariant = 'primary' | 'outline' | 'outlineLight' | 'link'

export function btn(variant: BtnVariant = 'primary', extra = '') {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-[0.9375rem] font-medium transition-[transform,background-color,border-color,box-shadow] duration-200 motion-reduce:transition-none'
  const v = {
    primary:
      'bg-blue-600 text-white shadow-[0_0_0_1px_rgb(255_255_255/0.12)_inset] hover:-translate-y-px hover:shadow-[0_8px_28px_-6px_rgb(38_123_255/0.65)] active:translate-y-0',
    outline: 'border border-white/25 text-white hover:border-white/50 hover:bg-white/[0.06]',
    outlineLight: 'border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04]',
    link: 'px-0 text-blue-300 hover:text-white',
  }[variant]
  return `${base} ${v} ${extra}`
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`t-eyebrow ${className}`}>{children}</p>
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
