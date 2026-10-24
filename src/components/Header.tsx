import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { nav } from '../content/site'
import Logo from './Logo'
import { StartProjectButton } from './ContactActions'
import { Cross, Menu } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Mobile menu: scroll lock, Escape to close, focus trap, focus returns to the toggle.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const toggle = toggleRef.current

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !headerRef.current) return
      const items = headerRef.current.querySelectorAll<HTMLElement>('#mobile-menu a, #mobile-menu button, #menu-toggle')
      const list = Array.from(items)
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.querySelector<HTMLElement>('#mobile-menu a')?.focus()

    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      toggle?.focus()
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line-dark bg-obsidian/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link to="/" aria-label="Sennexa Technologies, home" className="shrink-0 rounded-md">
          <Logo variant="wordmark" className="w-40 sm:w-44" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-md px-3.5 py-2 text-[0.9375rem] transition-colors ${
                  isActive ? 'text-white' : 'text-mist hover:text-white'
                } after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:bg-blue after:transition-transform after:duration-300 ${
                  isActive ? 'after:scale-x-100' : 'after:scale-x-0'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <StartProjectButton className="hidden sm:inline-flex" />
          <button
            id="menu-toggle"
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Cross /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto bg-obsidian lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-6">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-baseline gap-4 border-b border-line-dark py-5 font-display text-3xl font-semibold tracking-tight"
              >
                <span className="t-eyebrow text-mist">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
            <StartProjectButton className="mt-8 w-full" />
          </nav>
        </div>
      )}
    </header>
  )
}
