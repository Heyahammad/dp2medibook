/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#68BBE3",
        offwhite: "#FFF6E9",
        yellow: "#FFF100",
        primary2: "#195BFF",
        try: "#D5FFD0",
        red: "#FF1700",
        fadeprimary: "#A2DCF9",
        morefadeprimary: "#C7EDFF",
        green: "#00F557"
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
}