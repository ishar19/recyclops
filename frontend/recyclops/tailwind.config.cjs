/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#34A853",
        bluePrimary: "#4285F499 ",
        yellowPrimary: "#FABB0566",
        redPrimary: "#E9423599",
      },
    },
  },

  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
