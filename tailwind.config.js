/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  './styles/**/*.{html,js}',
   './index.html',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'outfit'],
      },
    },
  },
  plugins: [],
}
