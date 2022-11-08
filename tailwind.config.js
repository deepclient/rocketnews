/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        mono: ['Work Sans', 'sans-serif'],
      },
      colors: {
        black: {
          500: '#121214',
        },
        gray: {
          400: '#6A6A6A',
          500: '#A8A8A8'
        },
        green: {
          500: '#08C05E',
        },
        violet: {
          500: '#8257E5',
        },
      },
      width: {
        150: '720px',
        200: '750px',
        250: '800px',
        300: '1175px'
      },
      height: {
        200: '900px',
      },
      borderWidth: {
        3: '5px',
      },
    },
  },
  plugins: [],
}
