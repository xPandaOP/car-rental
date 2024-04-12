/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#f42c37',
        dark : '#111111'
      },
      container : {
        center: true ,
        padding : {
          DEFAULT : '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}