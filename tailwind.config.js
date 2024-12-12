/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '90rem': '90rem',
        '10rem': '10rem', 
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
