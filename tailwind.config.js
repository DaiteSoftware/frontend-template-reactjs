/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafaf9",
        secondary: "#d97706",
        hoverColor: "#005CAC",
        colorText: "#3f3f46",
        borderColor: "#d4d4d8",
        textHoverColor: "#fafafa",
        mainTableColor: "#005CAC",
        focusColor: "#1d4ed8",
        zebraColor: "#005CAC40",
        zebraPrimary: "#ffffff",
      },
    },
  },
  plugins: [],
};
