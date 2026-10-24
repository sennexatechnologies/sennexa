import { Link } from 'react-router'
import { industries, services, site } from '../content/site'
import Logo from './Logo'
import { EmailLink, WhatsAppButton } from './ContactActions'

const linkCls = 'text-mist transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="surface-dark border-t border-line-dark">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Link to="/" aria-label="Sennexa Technologies, home">
            <Logo variant="lockup" className="w-36" />
          </Link>
          <p className="mt-6 max-w-xs text-[0.9375rem] text-mist">
            A technology and digital growth company combining software, design, digital marketing and search visibility
            to help organisations reach customers, operate smarter and grow.
          </p>
          <p className="t-eyebrow mt-6 text-silver">{site.slogan}</p>
        </div>

        <nav aria-label="Services">
          <h2 className="t-eyebrow text-silver">Services</h2>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className={linkCls} to={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Solutions">
          <h2 className="t-eyebrow text-silver">Solutions</h2>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            {industries.map((i) => (
              <li key={i.id}>
                <Link className={linkCls} to={`/solutions#${i.id}`}>
                  {i.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className={linkCls} to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className={linkCls} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="t-eyebrow text-silver">Contact</h2>
          <div className="mt-5 space-y-4 text-[0.9375rem]">
            <EmailLink className={linkCls} />
            <div>
              <WhatsAppButton />
            </div>
            <Link to="/contact" className="block text-blue-300 underline-offset-4 hover:underline">
              Send a project enquiry
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link to="/privacy" className={linkCls}>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
