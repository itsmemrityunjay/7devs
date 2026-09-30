import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

// Same button styles the site already used, centralised. `arrow` adds a sliding arrow.
const variants = {
  solid: 'bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors',
  outline: 'border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide',
  white: 'bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors',
  outlineWhite: 'border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide',
  red: 'bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors',
}

export default function Button({ to, href, variant = 'solid', arrow = false, className = '', children, ...rest }) {
  const cls = `group/btn inline-flex items-center justify-center gap-2 text-center ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  const external = /^https?:/.test(href)
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {content}
    </a>
  )
}
