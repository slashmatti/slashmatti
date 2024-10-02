/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans"],
      },
      animation: {
        'shaking-img': 'shake 1s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
}

