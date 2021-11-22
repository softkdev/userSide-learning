module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
    colors: {
      orang: "#F28E43",
      green: "#025245",
      dark: "#131313",
      gray: "#969696",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
