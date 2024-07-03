/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      colors: {
        customGreen: '#32CD32',
        customRed: {
          light: '#FF7F7F',
          DEFAULT: '#FF0000',
          dark: '#8B0000',
        },
        customBlue: {
          100: '#EBF8FF',
          200: '#BEE3F8',
          300: '#90CDF4',
          400: '#63B3ED',
          500: '#4299E1',
          600: '#3182CE',
          700: '#2B6CB0',
          800: '#2C5282',
          900: '#2A4365',
        },
        customGrey:{
          DEFAULT: '#2c2e31',
          light:'#646669'
        }
      },
    },
  },
  plugins: [],
}
