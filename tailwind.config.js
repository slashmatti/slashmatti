/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(-2.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },
          '75%': { transform: 'rotate(2.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      fontFamily: {
        serif: ["Roboto", "serif"],
      },
      animation: {
        'shaking-img': 'shake 1s linear infinite', 
      },
    },
  },
  plugins: [],
}

