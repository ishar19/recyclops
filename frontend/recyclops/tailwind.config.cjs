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
        organic: "#2A9848",
        glass: "#D9AA21",
        paper: "#DFDFDF",
        metal: "#8F8F8F",
        plastic: "#4285F4",
        hazard: "#E94235",
        cardboard: "#723F23",
      },
    },
  },

  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
