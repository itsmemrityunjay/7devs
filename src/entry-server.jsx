import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { HeadContext } from './seo/Seo'
import { routes, preload, publicPaths } from './routes'
import { SITE } from './site'

export { publicPaths, SITE }

export async function render(url) {
  await Promise.all(routes.map(preload))
  const collector = {}
  const html = renderToString(
    <HeadContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadContext.Provider>
  )
  return { html, head: collector.head }
}
