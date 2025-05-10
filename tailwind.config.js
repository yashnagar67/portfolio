/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#141414',
        'netflix-red': '#E50914',
        'netflix-hover': '#F40612',
        'netflix-gray': '#808080',
      },
      fontFamily: {
        'netflix': ['Netflix Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 