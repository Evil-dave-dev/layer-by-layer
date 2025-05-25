// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        200: "#ADC8FF",
        300: "#84A9FF",
        400: "#6690FF",
        DEFAULT: "#3366FF",
        600: "#254EDB",
      },
      secondary: {
        200: "#FBCCB8",
        300: "#F4A793",
        400: "#E98475",
        DEFAULT: "#DB504A",
        600: "#BC363B",
      },
      grey: {
        400: "#C5CAC7",
        DEFAULT: "#A2A7A5",
        600: "#768F88",
        700: "#517870",
        800: "#33605C",
      },
      secondary: "#9333EA",
    },
  },
  plugins: [],
};
