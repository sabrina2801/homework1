/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "custom-xl":"400px"
      }
    },
  },
  plugins: [],
}