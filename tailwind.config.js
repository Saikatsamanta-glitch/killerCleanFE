/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      sm: '426px',
      md:'769px',
      lg:'1025px',
      xl:'1441px',
      xxl:'2561px',
    },
    extend: {
      keyframes: {
        pulse :{
          '0%, 100%' : {
            opacity: 1
          },
          '50%' :{
            opacity: .5
          },
        },
      },
      animation : {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}