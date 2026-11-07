// Festive themes. Each one switches on and off by itself by date (India time), so nothing
// needs to be deployed on the day. Dates are inclusive and written YYYY-MM-DD.
// To add a festival, add an entry here. To preview one, open any page with ?festival=<id>.
//
// palette: primary (main accent), light (highlights, text), deep (shadows), card (greeting background)
// top: 'lights' (fairy lights) or 'marigold' (genda phool toran) along the top edge
// lights: colours of the fairy lights
// particles: 'embers' (rise), 'petals', 'snowflakes' or 'confetti' (fall)
// decor: 'lanterns' (floating sky lanterns), 'baubles' (hanging ornaments) or null
// corner: 'mandala' (rangoli line art), 'snowflake' (crystal line art) or null
// icon: 'diya', 'thali', 'tree' or 'star' for the greeting card
export const festivals = [
  {
    id: 'diwali',
    start: '2026-11-07',
    end: '2026-11-08',
    title: 'Happy Diwali',
    kicker: 'शुभ दीपावली',
    message: 'May your brand and your business glow brighter this festival of lights. Warm wishes from all of us at 7Devs.',
    palette: { primary: '#e8b04b', light: '#fde7a8', deep: '#b45309', card: '#0c0a09' },
    top: 'lights',
    lights: ['#fde7a8', '#f5c766'],
    particles: 'embers',
    decor: 'lanterns',
    corner: 'mandala',
    icon: 'diya',
  },
  {
    id: 'bhai-dooj',
    start: '2026-11-10',
    end: '2026-11-10',
    title: 'Happy Bhai Dooj',
    kicker: 'भाई दूज की शुभकामनाएँ',
    message: 'To the bonds that cheer us on and make every win sweeter. Warm wishes from the 7Devs family.',
    palette: { primary: '#f59e0b', light: '#fde68a', deep: '#be123c', card: '#1a0a0e' },
    top: 'marigold',
    lights: ['#fde68a'],
    particles: 'petals',
    decor: null,
    corner: 'mandala',
    icon: 'thali',
  },
  {
    id: 'christmas',
    start: '2026-12-20',
    end: '2026-12-26',
    title: 'Merry Christmas',
    kicker: 'and a joyful season',
    message: 'Wishing you joy, warmth and a very good year ahead. From all of us at 7Devs.',
    palette: { primary: '#d4af37', light: '#fef3c7', deep: '#14532d', card: '#06140d' },
    top: 'lights',
    lights: ['#fde68a', '#ef4444', '#fef3c7', '#22c55e'],
    particles: 'snowflakes',
    decor: 'baubles',
    corner: 'snowflake',
    icon: 'tree',
  },
  {
    id: 'new-year',
    start: '2026-12-27',
    end: '2027-01-02',
    title: 'Happy New Year 2027',
    kicker: null,
    message: 'Here is to bigger ideas and better results. Thank you for being part of our year.',
    palette: { primary: '#d4af37', light: '#fff3c4', deep: '#78350f', card: '#0c0a09' },
    top: 'lights',
    lights: ['#fff3c4', '#d4af37'],
    particles: 'confetti',
    decor: null,
    corner: null,
    icon: 'star',
  },
]

// Today's date in India, as YYYY-MM-DD, whatever the visitor's own timezone is.
export const todayIST = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())

export const activeFestival = (date = todayIST()) => festivals.find((f) => date >= f.start && date <= f.end) || null
