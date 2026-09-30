import Button from './Button'
import { SITE, waLink } from '../../site'

export default function CtaBand({ title = 'Tell us what you need', text = 'Message us on WhatsApp. You will get a straight answer and a clear quote, not a sales pitch.', message = 'Hi! I found you on 7devs.in and would like to talk about my business.' }) {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">{title}</h2>
          <p className="text-xl text-gray-300 mb-10">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={waLink(message)} variant="white">Chat on WhatsApp</Button>
            <Button to="/contact" variant="outlineWhite">Contact form</Button>
          </div>
          <p className="text-gray-400 mt-8 text-sm">Or email <a className="underline hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a> · call <a className="underline hover:text-white" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></p>
        </div>
      </div>
    </section>
  )
}
