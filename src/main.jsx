import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lenis from 'lenis'
import App from './App.jsx'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
