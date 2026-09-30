import { Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { routes, loaded, preload } from './routes'

function RouteView({ route }) {
  const [Page, setPage] = useState(() => loaded[route.path] || null)
  useEffect(() => {
    if (!Page) preload(route).then(() => setPage(() => loaded[route.path]))
  }, [Page, route])
  return Page ? <Page {...route.props} /> : null
}

const App = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route element={<Layout />}>
        {routes.map((r) => <Route key={r.path} path={r.path} element={<RouteView key={r.path} route={r} />} />)}
      </Route>
    </Routes>
  </Suspense>
)

export default App
