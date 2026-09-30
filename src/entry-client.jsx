import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'
import { findRoute, preload } from './routes'

async function start() {
  // Load the chunk for the current URL first so hydration matches the prerendered HTML.
  const route = findRoute(window.location.pathname)
  if (route) await preload(route)

  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
  const root = document.getElementById('root')
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new Lenis({ autoRaf: true })
  }
}

start()
