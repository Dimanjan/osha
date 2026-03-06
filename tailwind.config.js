/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E7E7E7',
          100: '#DBDBDA',
          300: '#7D1C4F',
          500: '#48469D',
          700: '#7D1C4F',
          900: '#400313'
        },
        accent: '#7D1C4F'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Prata', 'serif']
      }
    }
  },
  plugins: []
};
