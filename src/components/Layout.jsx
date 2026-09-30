import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// Adds .is-visible to [data-reveal] elements as they scroll into view.
// A MutationObserver picks up elements from lazily loaded pages after navigation.
function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js')
      return
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el))
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}

export default function Layout() {
  useReveal()
  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
    </div>
  )
}
