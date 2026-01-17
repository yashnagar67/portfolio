/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#135bec",
        "accent-orange": "#FF6B00",
        "accent-purple": "#8B5CF6",
        "background-light": "#F7F7F5",
        "background-dark": "#101622",
        "netflix-red": "#E50914",
        "netflix-hover": "#B20710",
        "netflix-black": "#141414",
        "netflix-light": "#333333",
        "netflix-lightgray": "#B3B3B3",
        'cream': {
          50: '#FEFCF9',
          100: '#FDF8F0',
          200: '#FAF0E1',
          300: '#F5E4C8',
        },
      },
    },
  },
  plugins: [],
} 