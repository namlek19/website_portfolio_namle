/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spideyRed: '#ED1C24',
        mcuBlue: '#2585FE',
        venomVoid: '#050505',
        venomCard: '#0F0F0F',
      }
    },
  },
  plugins: [],
}