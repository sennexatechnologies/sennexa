import { Outlet, ScrollRestoration } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-white px-4 py-2 font-medium text-obsidian focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
