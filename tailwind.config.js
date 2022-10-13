module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#00A7FF",
          main: "#0C1737",
        },
        secodary: {
          main: "#FAAF40",
        },
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
