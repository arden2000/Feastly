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
        'foodbg': "url('../chinesefood.jpg')",
        'siteimg1': "url('../websiteimg1.png')",
      },

      backgroundColor: {
        /* red button color*/
        'ff3131': '#ff3131',
        /* beige background*/
        'efe5da': '#efe5da',
        /* Light red background color */
        'F2CCCC': '#F2CCCC',
      },
      textColor:{
        /** red text */
        'ff3131': '#ff3131',
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
