/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1800ad',
        secondary: '#1800ad',
        heading: '#1a1a2e',
        paragraph: '#4a4a6a',
      },
      fontFamily: {
        default: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}