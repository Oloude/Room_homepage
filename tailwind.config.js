/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       "League_Spartan": ['"League Spartan"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "darkGray" : "#a1a1a1",
        "vDarkGray" : "#454545",
      }
    },
  },
  plugins: [],
}