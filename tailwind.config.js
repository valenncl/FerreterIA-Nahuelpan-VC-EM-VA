/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nahuelpan: {
          black: '#000000',
          red: '#770C0D',
          gray: '#6E6A68',
          gold: '#F9B805',
        },
        whatsapp: '#25D366'
      }
    },
  },
  plugins: [],
}
