/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        philosopher: ['Philosopher', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        'bg-main': '#FFE2B0',
        'accent-red': '#F15B40',
      }
    },
  },
  plugins: [],
}