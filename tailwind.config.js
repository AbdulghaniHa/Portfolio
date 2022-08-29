/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: 'Silkscreen'
      },
      colors: {
        'primary': '#f1ebdd'
      }
    },
  },
  plugins: [],
}