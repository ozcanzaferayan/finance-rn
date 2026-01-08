/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3629B7', // blue-600
          pressed: '#1D4ED8', // blue-700
          disabled: '#93C5FD', // blue-300
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F2F1F9', // gray-200
          pressed: '#D1D5DB', // gray-300
          disabled: '#F3F4F6', // gray-100
          foreground: '#111827',
        },
        danger: {
          DEFAULT: '#DC2626',
          pressed: '#B91C1C',
          disabled: '#FCA5A5',
          foreground: '#FFFFFF',
        },
        success: {
          DEFAULT: '#059669',
          pressed: '#047857',
          disabled: '#6EE7B7',
          foreground: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
