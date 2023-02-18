/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#34A853",
        bluePrimary: "#A1BFF0 ",
        yellowPrimary: "#FABB0566",
      },
    },
  },

  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
