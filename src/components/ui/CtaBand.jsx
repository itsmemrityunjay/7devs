import Button from './Button'
import { SITE, waLink } from '../../site'

export default function CtaBand({ title = 'Tell us what you need', text = 'Message us on WhatsApp. You will get a straight answer and a clear quote, not a sales pitch.', message = 'Hi! I found you on 7devs.in and would like to talk about my business.' }) {
  return (
    <section className="py-8 md:py-12 px-4 bg-white">
      <div data-reveal className="relative overflow-hidden rounded-[2.5rem] bg-black py-20 md:py-28 px-6">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark"></div>
        <div aria-hidden="true" className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full bg-red-500/30 blur-3xl animate-float"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-red-500"></span>
            WhatsApp, email or phone
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={waLink(message)} variant="red" arrow className="px-8 py-4">Chat on WhatsApp</Button>
            <Button to="/contact" variant="outlineWhite">Contact form</Button>
          </div>
          <p className="text-gray-400 mt-10 text-sm">
            Or email <a className="underline underline-offset-4 hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span aria-hidden="true"> · </span>
            call <a className="underline underline-offset-4 hover:text-white" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
