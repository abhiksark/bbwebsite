/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0052CC',
        'secondary': '#00B8D9',
        'accent': '#6554C0',
        'text': '#172B4D',
        'bg': '#F4F5F7',
        'card': '#FFFFFF',
      },
    },
  },
  plugins: [],
}