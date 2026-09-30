/** @type {import('tailwindcss').Config} */
// Design tokens the site already used, made explicit. Rendering is unchanged:
// black/white/gray scale, red-500 accent, Comfortaa (loaded in index.html).
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
