import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Solutions from './pages/Solutions'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'services/:slug', Component: ServiceDetail },
      { path: 'solutions', Component: Solutions },
      { path: 'work', Component: Work },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'privacy', Component: Privacy },
      { path: '*', Component: NotFound },
    ],
  },
])
