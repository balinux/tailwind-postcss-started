/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
