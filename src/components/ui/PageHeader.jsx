import Breadcrumbs from './Breadcrumbs'

export default function PageHeader({ crumbs, h1, intro, children }) {
  return (
    <header className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {crumbs && <Breadcrumbs crumbs={crumbs} />}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6">{h1}</h1>
          {intro && <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </header>
  )
}
