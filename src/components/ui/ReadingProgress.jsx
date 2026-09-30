import { useEffect, useRef } from 'react'

// Thin red bar under the navbar that fills as the article is read.
// Writes the width directly to the DOM so scrolling never re-renders React.
export default function ReadingProgress({ targetId }) {
  const bar = useRef(null)
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (!el || !bar.current) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1
      bar.current.style.transform = `scaleX(${done})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [targetId])
  return (
    <div aria-hidden="true" className="fixed top-20 left-0 right-0 h-1 z-40">
      <div ref={bar} className="h-full bg-red-500 origin-left" style={{ transform: 'scaleX(0)' }}></div>
    </div>
  )
}
