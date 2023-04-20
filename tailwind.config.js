/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography({ theme }) {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none',
              },
              'code::after': {
                content: 'none'
              },
              code: {
                backgroundColor: theme('colors.zinc.700'),
                color: theme('colors.zinc.100'),
                paddingLeft: theme('spacing[1.5]'),
                paddingRight: theme('spacing[1.5]'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),
                borderRadius: theme('borderRadius.DEFAULT'),
              },
            }
          },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}