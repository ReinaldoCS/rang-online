/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'gray-text': '#3D3D4D',
      'gray-500': '#41414C',
      'gray-400': '#B7B7CC',
      'gray-100': '#F0F2F5',
      'orange-500': '#F1972C',
      'green-500': '#36B336',
      'yellow-500': '#FFB84D',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
