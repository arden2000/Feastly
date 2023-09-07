import type { Config } from 'tailwindcss'
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fajitasbg': "url('../mexican-dishes-pepper.jpg')",
      },

      backgroundSize:{
        'contain-size': 'contain',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
    colors: defaultColors,
    fontFamily: {
      sans1: ['Montserrat','sans-serif']
    }
  },
  plugins: [],
}
export default config
