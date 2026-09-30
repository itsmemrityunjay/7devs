import { Link } from 'react-router-dom'

export default function Breadcrumbs({ crumbs, dark = false }) {
  const all = [{ name: 'Home', path: '/' }, ...crumbs]
  return (
    <nav aria-label="Breadcrumb" className={`text-sm mb-6 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === all.length - 1
              ? <span aria-current="page" className={dark ? 'text-white' : 'text-black'}>{c.name}</span>
              : <Link to={c.path} className="hover:underline">{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
