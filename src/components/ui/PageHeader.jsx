import Breadcrumbs from './Breadcrumbs'

// Header for every inner page: grid backdrop, red glow, optional eyebrow and side slot.
export default function PageHeader({ crumbs, eyebrow, h1, intro, children, aside }) {
  return (
    <header className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid"></div>
      <div aria-hidden="true" className="absolute -top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-red-500/15 blur-3xl animate-float"></div>
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-6xl mx-auto ${aside ? 'grid lg:grid-cols-[1fr_20rem] gap-12 items-end' : ''}`}>
          <div className="max-w-4xl">
            {crumbs && <Breadcrumbs crumbs={crumbs} />}
            {eyebrow && (
              <p className="animate-fade-up inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm mb-4">
                <span aria-hidden="true" className="w-8 h-px bg-red-500"></span>
                {eyebrow}
              </p>
            )}
            <h1 className="animate-fade-up [animation-delay:60ms] text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">{h1}</h1>
            {intro && <p className="animate-fade-up [animation-delay:120ms] text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">{intro}</p>}
            {children && <div className="animate-fade-up [animation-delay:180ms] mt-8">{children}</div>}
          </div>
          {aside && <div className="animate-fade-up [animation-delay:240ms]">{aside}</div>}
        </div>
      </div>
    </header>
  )
}
