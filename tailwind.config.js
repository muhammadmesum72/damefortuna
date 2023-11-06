/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary : "#7975CB" //96760f   c49a14
      }
    },
  },
  plugins: [],
}