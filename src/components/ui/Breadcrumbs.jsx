import { Link } from 'react-router-dom'

export default function Breadcrumbs({ crumbs, dark = false }) {
  const all = [{ name: 'Home', path: '/' }, ...crumbs]
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm rounded-full border px-4 py-2 backdrop-blur ${dark ? 'text-gray-300 border-white/20 bg-white/5' : 'text-gray-600 border-gray-200 bg-white/80'}`}>
        {all.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-gray-400">/</span>}
            {i === all.length - 1
              ? <span aria-current="page" className={`font-medium ${dark ? 'text-white' : 'text-black'}`}>{c.name}</span>
              : <Link to={c.path} className="hover:text-red-500 transition-colors">{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
