const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
    },
    colors: {
      'darkBlue': '#2F54A1',
      'lightBlue': '#98DAFF',
      'blue': '#3FC3FF',
      'darkYellow': '#907527',
      'lightYellow': '#F6DE58',
      'yellow': '#F7C713',
      'grey': '#424242',
      'white': '#FFFFFF',
    }
  },
  plugins: [],
});

