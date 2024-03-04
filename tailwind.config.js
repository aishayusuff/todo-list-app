/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary-color': '#000',
          'secondary-color': '#e8caca',
          'tert-color': '#280909',
        }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  }