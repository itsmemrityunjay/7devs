import { Plus } from './Icons'

// Native <details> keeps answers in the HTML and works without JS.
export default function Faq({ items, dark = false, heading = 'Frequently asked questions', id }) {
  return (
    <section id={id} className={`py-24 ${dark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[18rem_1fr] gap-10 lg:gap-16">
          <div data-reveal className="lg:sticky lg:top-28 self-start">
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">FAQ</p>
            <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${dark ? 'text-white' : 'text-black'}`}>{heading}</h2>
          </div>
          <div className="space-y-3">
            {items.map((f, i) => (
              <details
                key={f.q}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(i, 5) * 50}ms` }}
                className={`group rounded-3xl border transition-colors duration-300 ${dark
                  ? 'border-white/15 bg-white/[0.03] open:bg-white/[0.07] open:border-white/30'
                  : 'border-gray-200 bg-white open:bg-gray-100 open:border-gray-100 hover:border-black'}`}
              >
                <summary className={`flex justify-between items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden ${dark ? 'text-white' : 'text-black'}`}>
                  <h3 className="text-lg md:text-xl font-bold">{f.q}</h3>
                  <span aria-hidden="true" className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 group-open:rotate-45 group-open:bg-red-500 group-open:text-white ${dark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    <Plus />
                  </span>
                </summary>
                <p className={`px-6 pb-6 -mt-2 leading-relaxed max-w-3xl ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})
