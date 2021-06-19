module.exports = {
  mode : 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple: {
          light: '#c884bd',
          default: '#825ba4',
          dark: '#202e78',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
