/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#135bec",
        "accent-orange": "#FF6B00",
        "accent-purple": "#8B5CF6",
        "background-light": "#F7F7F5",
        "background-dark": "#101622",
      }
    },
  },
  plugins: [],
}