/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minWidth: {
      '80': '20rem',
    },
    maxWidth: {
      '80': '20rem',
    }
  },
  plugins: [],
}