import { Link } from 'react-router-dom'

// Same button styles the site already used, centralised.
const variants = {
  solid: 'bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors',
  outline: 'border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide',
  white: 'bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors',
  outlineWhite: 'border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide',
}

export default function Button({ to, href, variant = 'solid', className = '', children, ...rest }) {
  const cls = `inline-block text-center ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  const external = /^https?:/.test(href)
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}
