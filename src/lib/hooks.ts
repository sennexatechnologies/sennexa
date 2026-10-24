import { useEffect, useState } from 'react'
import { site } from '../content/site'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

export function useSeo(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title === site.name ? `${site.name} | ${site.slogan}` : `${title} | ${site.name}`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description

    // Canonical only once the production domain is configured in content/site.ts.
    if (site.siteUrl) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = site.siteUrl.replace(/\/$/, '') + path
    }
  }, [title, description, path])
}
