/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./index.html"],
  theme: {
    extend: {
      transitionProperty: {
        rounded: "border-radius",
      },
    },
  },
  plugins: [],
};
