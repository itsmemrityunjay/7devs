import { useEffect, useId, useMemo, useState } from 'react'
import { activeFestival, festivals } from '../content/festivals'

// Festive decoration. Rendered only in the browser after load, so the prerendered HTML
// stays plain and a festival appears (and disappears) purely by date, with no redeploy.

// Deterministic pseudo-random so the layout is spread evenly and stable between renders.
const rand = (i, n) => { const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453; return x - Math.floor(x) }

// Rangoli-style line art: petals and rings drawn with a single thin stroke.
function Mandala({ color, className, style }) {
    return (
        <svg viewBox='-100 -100 200 200' className={className} style={style} fill='none' stroke={color} strokeWidth='0.6' aria-hidden='true'>
            <circle r='96' /><circle r='90' strokeDasharray='1 3' /><circle r='62' /><circle r='22' /><circle r='8' />
            {Array.from({ length: 16 }).map((_, i) => (
                <ellipse key={`a${i}`} cx='0' cy='-44' rx='9' ry='19' transform={`rotate(${i * 22.5})`} />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
                <path key={`b${i}`} d='M0 -64 Q 14 -78 0 -94 Q -14 -78 0 -64 Z' transform={`rotate(${i * 45 + 22.5})`} />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
                <circle key={`c${i}`} cx='0' cy='-76' r='2' transform={`rotate(${i * 15})`} />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
                <path key={`d${i}`} d='M0 -8 L5 -22 L0 -30 L-5 -22 Z' transform={`rotate(${i * 45})`} />
            ))}
        </svg>
    )
}

function Diya({ p, className }) {
    const id = useId().replace(/:/g, '')
    return (
        <svg viewBox='0 0 64 56' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id={`bowl${id}`} x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0' stopColor={p.primary} /><stop offset='1' stopColor={p.deep} />
                </linearGradient>
                <linearGradient id={`flame${id}`} x1='0' y1='1' x2='0' y2='0'>
                    <stop offset='0' stopColor='#fff' /><stop offset='.45' stopColor={p.light} /><stop offset='1' stopColor={p.primary} />
                </linearGradient>
                <radialGradient id={`halo${id}`}>
                    <stop offset='0' stopColor={p.light} stopOpacity='.9' /><stop offset='1' stopColor={p.primary} stopOpacity='0' />
                </radialGradient>
            </defs>
            <circle cx='32' cy='18' r='16' fill={`url(#halo${id})`} className='fest-halo' />
            <path d='M32 4c4 6 6.5 10 3.4 14.6a4 4 0 0 1-6.8 0C25.5 14 28 10 32 4Z' fill={`url(#flame${id})`} className='fest-flame' />
            <path d='M6 28h52c0 11-11.6 19-26 19S6 39 6 28Z' fill={`url(#bowl${id})`} />
            <path d='M6 28h52' stroke={p.light} strokeWidth='1.2' strokeLinecap='round' />
            <path d='M20 34c4 3 20 3 24 0' stroke={p.light} strokeOpacity='.5' strokeWidth='1' fill='none' strokeLinecap='round' />
        </svg>
    )
}

function Star({ p, className }) {
    const id = useId().replace(/:/g, '')
    return (
        <svg viewBox='0 0 64 64' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id={`st${id}`} x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0' stopColor={p.light} /><stop offset='1' stopColor={p.primary} />
                </linearGradient>
            </defs>
            <path className='fest-halo' d='M32 2c2.4 14 8.6 23.6 30 30-21.4 6.4-27.6 16-30 30-2.4-14-8.6-23.6-30-30 21.4-6.4 27.6-16 30-30Z' fill={`url(#st${id})`} />
        </svg>
    )
}

function Lantern({ p, idx }) {
    const id = `ln${idx}`
    return (
        <svg viewBox='0 0 40 58' className='w-full h-full' aria-hidden='true'>
            <defs>
                <radialGradient id={id} cx='.5' cy='.62' r='.65'>
                    <stop offset='0' stopColor='#fffbea' /><stop offset='.35' stopColor={p.light} /><stop offset='.8' stopColor={p.primary} /><stop offset='1' stopColor={p.deep} />
                </radialGradient>
            </defs>
            <path d='M9 6h22l6 36c-4 6-30 6-34 0L9 6Z' fill={`url(#${id})`} />
            <path d='M9 6h22' stroke={p.deep} strokeWidth='2' strokeLinecap='round' />
            <path d='M20 6v38M14.5 6 12 43M25.5 6 28 43' stroke={p.deep} strokeOpacity='.25' strokeWidth='.8' />
            <ellipse cx='20' cy='47' rx='3' ry='4' fill='#fff7d6' className='fest-flame' />
        </svg>
    )
}

// Scalloped string of warm fairy lights hanging from the top edge.
function FairyLights({ colors, primary }) {
    const scallops = 7
    const ts = [0.1, 0.3, 0.5, 0.7, 0.9]
    const y = (t) => (1 - t) * (1 - t) * 1 + 2 * (1 - t) * t * 30 + t * t * 1
    return (
        <div aria-hidden='true' className='fixed top-0 inset-x-0 h-6 z-[55] pointer-events-none flex'>
            {Array.from({ length: scallops }).map((_, s) => (
                <div key={s} className='relative flex-1 h-full'>
                    <svg viewBox='0 0 160 20' preserveAspectRatio='none' className='absolute inset-0 w-full h-full'>
                        <path d='M0 1 Q80 30 160 1' fill='none' stroke={primary} strokeOpacity='.55' strokeWidth='1' vectorEffect='non-scaling-stroke' />
                    </svg>
                    {ts.map((t, i) => {
                        const c = colors[(s + i) % colors.length]
                        return (
                            <span
                                key={i}
                                className='fest-bulb absolute w-1.5 h-1.5 -ml-[3px] rounded-full'
                                style={{ left: `${t * 100}%`, top: y(t) - 2, background: c, color: c, animationDelay: `${((s * 5 + i) % 7) * 0.4}s` }}
                            ></span>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

// Six-armed ice crystal, used for falling snowflakes and the corner line art.
function SnowCrystal({ color, width = 2.5, className, style }) {
    return (
        <svg viewBox='-50 -50 100 100' className={className} style={style} fill='none' stroke={color} strokeWidth={width} strokeLinecap='round' aria-hidden='true'>
            {Array.from({ length: 6 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 60})`}>
                    <path d='M0 0V-44M0 -16l-9 -9M0 -16l9 -9M0 -29l-7 -7M0 -29l7 -7' />
                    <circle cy='-46' r='2.2' />
                </g>
            ))}
            <path d='M0 -10L8.7 -5V5L0 10L-8.7 5V-5Z' />
        </svg>
    )
}

function Petal({ color, vein }) {
    return (
        <svg viewBox='0 0 20 28' className='w-full h-full' aria-hidden='true'>
            <path d='M10 1C18.5 7 18.5 20 10 27 1.5 20 1.5 7 10 1Z' fill={color} />
            <path d='M10 4v20' stroke={vein} strokeOpacity='.35' strokeWidth='.8' />
        </svg>
    )
}

// Genda phool toran: a swagged string of marigold beads with mango leaves and a few hanging strands.
function MarigoldToran() {
    const scallops = 7
    const ts = Array.from({ length: 11 }, (_, i) => 0.04 + i * 0.092)
    const y = (t) => 2 * (1 - t) * t * 26
    const bead = (c) => ({ background: `radial-gradient(circle at 40% 35%, #fef08a 0%, ${c} 55%, #c2410c 100%)` })
    const hangers = [13, 24, 72, 82]
    return (
        <div aria-hidden='true' className='fixed top-0 inset-x-0 h-6 z-[55] pointer-events-none'>
            <div className='absolute inset-0 flex'>
                {Array.from({ length: scallops }).map((_, s) => (
                    <div key={s} className='relative flex-1 h-full'>
                        {ts.map((t, i) => (
                            <span key={i} className='absolute w-2.5 h-2.5 -ml-[5px] rounded-full shadow-sm' style={{ left: `${t * 100}%`, top: y(t) - 4, ...bead(i % 3 === 1 ? '#fbbf24' : '#f97316') }}></span>
                        ))}
                    </div>
                ))}
            </div>
            {Array.from({ length: scallops + 1 }).map((_, j) => (
                <svg key={j} viewBox='0 0 10 20' className='absolute top-0 w-2.5 h-5 -ml-[5px]' style={{ left: `${(j / scallops) * 100}%` }}>
                    <path d='M5 0C9 5 9 13 5 20 1 13 1 5 5 0Z' fill='#15803d' /><path d='M5 2v16' stroke='#86efac' strokeOpacity='.6' strokeWidth='.6' />
                </svg>
            ))}
            {hangers.map((left, h) => (
                <span key={h} className='fest-swing absolute top-2 hidden lg:flex flex-col items-center' style={{ left: `${left}%`, animationDelay: `${-h * 0.7}s` }}>
                    {[0, 1, 2, 3].map((k) => (
                        <span key={k} className='block w-2.5 h-2.5 -mt-0.5 rounded-full' style={bead(k % 2 ? '#fbbf24' : '#f97316')}></span>
                    ))}
                    <svg viewBox='0 0 12 14' className='w-3 h-3.5 -mt-0.5'><path d='M6 0C10 2 11 8 12 12H0C1 8 2 2 6 0Z' fill='#d4a017' /><circle cx='6' cy='13' r='1.5' fill='#a16207' /></svg>
                </span>
            ))}
        </div>
    )
}

// Glossy Christmas ornaments hanging on fine threads, kept clear of the logo and menu.
function Baubles({ p }) {
    const items = [
        { left: 14, len: 90, size: 30, c: '#dc2626', d: '#7f1d1d' },
        { left: 20, len: 150, size: 24, c: p.primary, d: '#78350f' },
        { left: 74, len: 120, size: 28, c: '#15803d', d: '#052e16' },
        { left: 80, len: 70, size: 22, c: '#dc2626', d: '#7f1d1d' },
    ]
    return (
        <div aria-hidden='true' className='hidden lg:block fixed inset-x-0 top-0 z-[55] pointer-events-none'>
            {items.map((b, i) => (
                <span key={i} className='fest-swing absolute top-0 flex flex-col items-center' style={{ left: `${b.left}%`, animationDelay: `${-i * 0.9}s`, animationDuration: `${3.5 + i * 0.4}s` }}>
                    <span className='block w-px' style={{ height: b.len, background: `linear-gradient(${p.primary}00, ${p.primary})` }}></span>
                    <span className='block w-2 h-1.5 rounded-t-sm' style={{ background: p.primary }}></span>
                    <span className='block rounded-full' style={{ width: b.size, height: b.size, background: `radial-gradient(circle at 33% 28%, #fff 0, ${b.c} 22%, ${b.d} 100%)`, boxShadow: `0 6px 18px -4px ${b.c}aa` }}></span>
                </span>
            ))}
        </div>
    )
}

function Particles({ f }) {
    const { palette: p, particles } = f
    const count = particles === 'embers' ? 26 : particles === 'petals' ? 20 : 22
    return (
        <div aria-hidden='true' className='fixed inset-0 z-[53] pointer-events-none overflow-hidden'>
            {Array.from({ length: count }).map((_, i) => {
                const left = (i / count) * 100 + rand(i, 1) * (100 / count)
                const dur = (particles === 'embers' ? 10 : 13) + rand(i, 4) * 10
                const base = { left: `${left}%`, '--sway': `${(rand(i, 5) - 0.5) * 120}px`, animationDuration: `${dur}s`, animationDelay: `${-rand(i, 3) * dur}s` }
                if (particles === 'embers') {
                    const s = 3 + Math.round(rand(i, 2) * 5)
                    return <span key={i} className='fest-rise absolute rounded-full' style={{ ...base, width: s, height: s, background: `radial-gradient(circle, #fff 0%, ${p.light} 35%, ${p.primary} 60%, transparent 72%)`, boxShadow: `0 0 ${s * 2}px ${p.primary}` }}></span>
                }
                if (particles === 'petals') {
                    const s = 10 + Math.round(rand(i, 2) * 8)
                    const c = ['#f97316', '#fbbf24', '#e11d48', '#fb923c'][i % 4]
                    return (
                        <span key={i} className='fest-fall absolute' style={{ ...base, width: s, height: s * 1.4 }}>
                            <span className='fest-flutter' style={{ animationDelay: `${-rand(i, 6) * 5}s` }}><Petal color={c} vein='#7c2d12' /></span>
                        </span>
                    )
                }
                if (particles === 'snowflakes') {
                    if (i % 3) {
                        const s = 4 + Math.round(rand(i, 2) * 5)
                        return <span key={i} className='fest-fall absolute rounded-full' style={{ ...base, width: s, height: s, background: '#e0f2fe', boxShadow: '0 0 6px rgba(125,170,220,.9)' }}></span>
                    }
                    const s = 14 + Math.round(rand(i, 2) * 14)
                    return (
                        <span key={i} className='fest-fall absolute' style={{ ...base, width: s, height: s }}>
                            <span className='fest-twirl' style={{ animationDuration: '9s' }}><SnowCrystal color={i % 2 ? '#93c5fd' : p.primary} className='w-full h-full' /></span>
                        </span>
                    )
                }
                const colors = [p.primary, p.light, '#ef4444', '#111']
                return <span key={i} className='fest-fall absolute' style={{ ...base, width: 6, height: 11 }}><span className='fest-twirl rounded-[2px]' style={{ background: colors[i % colors.length], animationDelay: `${-rand(i, 6) * 2}s` }}></span></span>
            })}
        </div>
    )
}

function Lanterns({ p }) {
    return (
        <div aria-hidden='true' className='fixed inset-0 z-[53] pointer-events-none overflow-hidden'>
            {[8, 27, 71, 90].map((left, i) => {
                const w = 26 + Math.round(rand(i, 7) * 16)
                const dur = 32 + rand(i, 8) * 14
                return (
                    <span key={i} className='fest-lantern absolute block' style={{ left: `${left}%`, width: w, height: w * 1.45, color: p.primary, animationDuration: `${dur}s`, animationDelay: `${-rand(i, 9) * dur}s` }}>
                        <Lantern p={p} idx={i} />
                    </span>
                )
            })}
        </div>
    )
}

// Puja thali for Bhai Dooj: diya, kumkum for the tilak, rice and a marigold.
function Thali({ p, className }) {
    const id = useId().replace(/:/g, '')
    return (
        <svg viewBox='0 0 64 56' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id={`pl${id}`} x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0' stopColor='#fde68a' /><stop offset='.5' stopColor='#f59e0b' /><stop offset='1' stopColor='#92400e' />
                </linearGradient>
                <radialGradient id={`hl${id}`}>
                    <stop offset='0' stopColor='#fef3c7' stopOpacity='.9' /><stop offset='1' stopColor={p.primary} stopOpacity='0' />
                </radialGradient>
            </defs>
            <ellipse cx='32' cy='40' rx='29' ry='12' fill={`url(#pl${id})`} />
            <ellipse cx='32' cy='38.5' rx='24' ry='8.5' fill='#fbbf24' stroke='#fef3c7' strokeOpacity='.6' strokeWidth='.8' />
            <ellipse cx='32' cy='38.5' rx='18' ry='6' fill='none' stroke='#92400e' strokeOpacity='.45' strokeDasharray='1.5 2' />
            <circle cx='20' cy='22' r='11' fill={`url(#hl${id})`} className='fest-halo' />
            <path d='M20 15c2.4 3.4 3.8 5.6 2 8.2a2.4 2.4 0 0 1-4 0c-1.8-2.6-.4-4.8 2-8.2Z' fill='#fff7d6' className='fest-flame' />
            <path d='M12 30h16c0 4-3.6 6.6-8 6.6S12 34 12 30Z' fill='#b45309' />
            <ellipse cx='43' cy='35' rx='6' ry='3' fill='#9f1239' /><ellipse cx='43' cy='34' rx='4.6' ry='2' fill='#e11d48' />
            {[[30, 40], [33, 42.5], [36, 40.5], [27, 42], [34, 37.5]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx='1.1' ry='.6' fill='#fff' />)}
            {Array.from({ length: 8 }).map((_, i) => <circle key={i} cx={52 + 3.2 * Math.cos(i * 0.785)} cy={37 + 3.2 * Math.sin(i * 0.785)} r='2.2' fill='#f97316' />)}
            <circle cx='52' cy='37' r='1.8' fill='#fde047' />
        </svg>
    )
}

function Tree({ p, className }) {
    const id = useId().replace(/:/g, '')
    return (
        <svg viewBox='0 0 56 64' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id={`tr${id}`} x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0' stopColor='#22c55e' /><stop offset='1' stopColor='#14532d' />
                </linearGradient>
            </defs>
            <path d='M28 9 40 25H34L46 41H38L50 56H6L18 41H10L22 25H16Z' fill={`url(#tr${id})`} strokeLinejoin='round' />
            <path d='M18 33c6 3 14 3 20-1M14 48c9 4 20 4 30-1' stroke={p.primary} strokeWidth='1.2' fill='none' strokeLinecap='round' />
            <rect x='25' y='56' width='6' height='6' rx='1' fill='#78350f' />
            {[[22, 29, '#ef4444'], [33, 37, p.primary], [19, 45, p.primary], [36, 51, '#ef4444'], [28, 44, '#fef3c7']].map(([x, y, c], i) => (
                <circle key={i} cx={x} cy={y} r='1.9' fill={c} className='fest-halo' style={{ animationDelay: `${i * 0.4}s` }} />
            ))}
            <path className='fest-halo' d='M28 0l2 4.4 4.8.5-3.6 3.2 1 4.7L28 10.4 23.8 12.8l1-4.7-3.6-3.2 4.8-.5Z' fill={p.primary} />
        </svg>
    )
}

const Icon = ({ f, className }) => {
    const Comp = { diya: Diya, thali: Thali, tree: Tree }[f.icon] || Star
    return <Comp p={f.palette} className={className} />
}

const Corner = ({ f, className }) => (f.corner === 'snowflake'
    ? <SnowCrystal color={f.palette.primary} width={0.6} className={className} />
    : <Mandala color={f.palette.primary} className={className} />)

function Greeting({ f, onClose }) {
    const p = f.palette
    return (
        <div role='status' className='fest-card fixed z-[56] bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[23rem] rounded-[28px] p-px shadow-2xl' style={{ background: `linear-gradient(135deg, ${p.light}, ${p.primary}33 35%, transparent 55%, ${p.primary}88)`, boxShadow: `0 30px 80px -20px ${p.primary}99` }}>
            <div className='relative rounded-[27px] px-6 pt-6 pb-5 overflow-hidden' style={{ background: p.card }}>
                <Corner f={f} className='fest-spin-slow absolute -right-20 -top-20 w-60 h-60 opacity-25' />
                <div aria-hidden='true' className='absolute -left-10 -bottom-16 w-48 h-48 rounded-full blur-3xl opacity-30' style={{ background: p.primary }}></div>
                <button type='button' onClick={onClose} aria-label='Close greeting' className='absolute top-3 right-3 z-10 w-8 h-8 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center text-lg leading-none transition-colors'>&times;</button>
                <div className='relative flex gap-4 items-center'>
                    <Icon f={f} className='w-16 h-16 shrink-0' />
                    <div>
                        <p className='text-[10px] uppercase tracking-[0.3em] mb-1' style={{ color: p.light, opacity: 0.7 }}>7Devs wishes you</p>
                        <p className='fest-shimmer text-2xl font-extrabold leading-tight' style={{ backgroundImage: `linear-gradient(90deg, ${p.primary}, ${p.light}, #fff, ${p.light}, ${p.primary})` }}>{f.title}</p>
                        {f.kicker && <p className='text-sm mt-0.5' style={{ color: p.light }}>{f.kicker}</p>}
                    </div>
                </div>
                <div aria-hidden='true' className='relative h-px my-4' style={{ background: `linear-gradient(90deg, transparent, ${p.primary}, transparent)` }}></div>
                <p className='relative text-sm text-stone-300 leading-relaxed'>{f.message}</p>
            </div>
        </div>
    )
}

export default function Festive() {
    const [f, setF] = useState(null)
    const [open, setOpen] = useState(false)

    // Pick the festival on load, and re-check every minute so it switches off at midnight IST.
    useEffect(() => {
        const pick = () => {
            const forced = new URLSearchParams(window.location.search).get('festival')
            return festivals.find((x) => x.id === forced) || activeFestival()
        }
        const apply = () => setF((prev) => { const next = pick(); return prev && next && prev.id === next.id ? prev : next })
        apply()
        const t = setInterval(apply, 60000)
        return () => clearInterval(t)
    }, [])

    useEffect(() => {
        if (!f) { setOpen(false); return }
        let seen = false
        try { seen = sessionStorage.getItem(`festive-${f.id}`) === '1' } catch { /* storage blocked */ }
        if (seen) return
        const t = setTimeout(() => setOpen(true), 900)
        return () => clearTimeout(t)
    }, [f])

    const close = () => {
        setOpen(false)
        try { sessionStorage.setItem(`festive-${f.id}`, '1') } catch { /* storage blocked */ }
    }

    const layers = useMemo(() => f && (
        <>
            <div aria-hidden='true' className='fixed inset-x-0 top-0 h-32 z-[54] pointer-events-none' style={{ background: `linear-gradient(to bottom, ${f.palette.primary}26, transparent)` }}></div>
            {f.corner && <Corner f={f} className='fest-spin-slow fixed z-[53] pointer-events-none -right-40 -top-40 w-[26rem] h-[26rem] md:w-[38rem] md:h-[38rem] opacity-[0.16]' />}
            {f.top === 'marigold' ? <MarigoldToran /> : <FairyLights colors={f.lights} primary={f.palette.primary} />}
            {f.decor === 'lanterns' && <Lanterns p={f.palette} />}
            {f.decor === 'baubles' && <Baubles p={f.palette} />}
            <Particles f={f} />
        </>
    ), [f])

    if (!f) return null
    return (
        <>
            {layers}
            {open && <Greeting f={f} onClose={close} />}
        </>
    )
}
