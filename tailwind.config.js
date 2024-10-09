module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'brand-700': '#6941C6',
      'brand-50': '#F9F5FF',
      'brand-400': '#B692F6',
      'brand-200': '#E9D7FE',
      'brand-100': '#F4EBFF',
      'gray-900': '#101828',
      'gray-600': '#475467',
      'gray-500': '#667085',
      'gray-400': '#98A2B3',
      'gray-200': '#EAECF0',
      'gray-100': '#F2F4F7',
      'success-700': '#027A48',
      'success-100': '#D1FADF',
      'error-500': '#F04438',
      'error-100': '#FEE4E2',
      'blue-600': '#1570EF',
      'blue-500': '#2E90FA',
      'blue-300': '#84CAFF',
      'blue-100': '#D1E9FF',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};