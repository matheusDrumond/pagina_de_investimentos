/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{html, js}'],
  theme: {
    extend: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.6)'
    },
    keyframes: {
      upDown:{
        '0%': {},
        '33%': {transform: 'translateY(2em)'},
        '66': {trasform: 'translateY(-4em)'},
        '100%': {translate: 'translateY(4em)'}
      }
    },
    animation: {
      upDown: 'upDown 10s ease-in-out infinite'
    },
  },
  plugins: [],
}

