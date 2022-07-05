/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      "sans": ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        "text-base": "#afb6c2",
        "text-title": "#d4ccb6",
        "background": "#191816",
        "form-background": "#24221f",
        "primary-color": "#ffc632",
        "border-color": "#868686"
      }
    },
  },
  plugins: [],
}
