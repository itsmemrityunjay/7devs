// Endless scrolling band (the successor of the old "Let's Connect" scroller).
// Content is duplicated once so translateX(-50%) loops seamlessly.
const Marquee = ({ items, dark = true }) => {
    const row = (hidden) => (
        <ul aria-hidden={hidden || undefined} className='flex shrink-0 items-center'>
            {items.map((t, i) => (
                <li key={t + i} className='flex items-center'>
                    <span className={`px-8 text-4xl md:text-6xl font-bold uppercase tracking-tight whitespace-nowrap ${i % 2 ? (dark ? 'text-outline-white' : 'text-outline') : ''}`}>{t}</span>
                    <span aria-hidden='true' className='text-red-500 text-3xl'>✦</span>
                </li>
            ))}
        </ul>
    )
    return (
        <div className={`py-8 overflow-hidden border-y ${dark ? 'bg-black text-white border-white/10' : 'bg-white text-black border-gray-200'}`}>
            <div className='flex w-max animate-marquee hover:[animation-play-state:paused]'>
                {row(false)}
                {row(true)}
            </div>
        </div>
    )
}

export default Marquee
