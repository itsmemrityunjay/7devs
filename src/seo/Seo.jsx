import { createContext, useContext, useEffect } from 'react'
import { buildHead } from './buildHead'

// During prerender, entry-server provides a collector object; Seo writes into it.
export const HeadContext = createContext(null)

export default function Seo(props) {
  const collector = useContext(HeadContext)
  const head = buildHead(props)
  if (collector) collector.head = head

  useEffect(() => {
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    const tpl = document.createElement('template')
    tpl.innerHTML = head.tags
    document.head.append(...tpl.content.children)
    document.title = head.title
  }, [head.tags, head.title])

  return null
}
