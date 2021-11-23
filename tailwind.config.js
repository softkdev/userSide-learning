const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      colors: {
        orang: "#F28E43",
        green: "#025245",
        transparent: "transparent",
        current: "currentColor",
        dark: "#131313",
        // gray: "#969696",
        // white: "#fff",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    },
    colors: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
