import { Link } from 'react-router'
import { useSeo } from '../lib/hooks'
import PageHero from '../components/PageHero'
import { btn } from '../components/ui'

export default function NotFound() {
  useSeo('Page not found', 'This page could not be found.', '/404')
  return (
    <PageHero eyebrow="Error 404" title="That page is off the network." lead="The page you are looking for does not exist or has moved.">
      <Link to="/" className={btn('primary')}>
        Back to home
      </Link>
      <Link to="/contact" className={btn('outline')}>
        Contact us
      </Link>
    </PageHero>
  )
}
