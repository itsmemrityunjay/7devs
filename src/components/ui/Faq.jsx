// Native <details> keeps answers in the HTML and works without JS.
export default function Faq({ items, dark = false, heading = 'Frequently asked questions', id }) {
  return (
    <section id={id} className={`py-20 ${dark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${dark ? 'text-white' : 'text-black'}`}>{heading}</h2>
          <div>
            {items.map((f) => (
              <details key={f.q} className={`group border-b ${dark ? 'border-white' : 'border-gray-200'}`}>
                <summary className={`flex justify-between items-center py-6 cursor-pointer list-none text-lg md:text-xl font-bold hover:opacity-70 transition-opacity ${dark ? 'text-white' : 'text-black'}`}>
                  <h3 className="pr-4">{f.q}</h3>
                  <span aria-hidden="true" className="text-3xl font-light group-open:hidden">+</span>
                  <span aria-hidden="true" className="text-3xl font-light hidden group-open:inline">−</span>
                </summary>
                <p className={`pb-6 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{f.a}</p>
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
