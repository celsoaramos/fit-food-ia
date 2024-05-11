/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#aad8ff', // Estimativa para uma variação mais clara
          200: '#84c4ff', // Estimativa para uma variação mais clara
          300: '#5eaeff', // Estimativa para uma variação mais clara
          400: '#3a94ff', // Estimativa para uma variação mais clara
          500: '#3182ce', // Cor original
          600: '#296aac', // Estimativa para uma variação mais escura
          700: '#1f508a', // Estimativa para uma variação mais escura
          800: '#153668', // Estimativa para uma variação mais escura
          900: '#0a1e46', // Estimativa para uma variação mais escura
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        //sans: ['Calistoga', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        openmenu: 'openmenu 0.5s ease-in',
        closemenu: 'closemenu 0.5s ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { left: '-224px' },
          // final position
          '100%': { left: '0px' }
        },
        closemenu: {
          // initial position
          '0%': { left: '0px' },
          // final position
          '100%': { left: '-224px' }
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/aspect-ratio')
  ],
}
