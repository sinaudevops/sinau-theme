/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/sinau-theme/layouts/**/*.html",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1f2421',
        'primary-green': '#49a078',
        'secondary-teal': '#216869',
        'accent-mint': '#9cc5a1',
        'accent-tan': '#d4aa7d',
        'accent-beige': '#e3c9a0',
        'background-light': '#e7e7e7',
        'dark-gray': '#525252',
        'deep-black': '#0a0a0a'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
