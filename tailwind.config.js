/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafaf9",
        secondary: "#d97706",
        hoverColor: "#f59e0b",
        colorText: "#3f3f46",
        borderColor: "#d4d4d8",
        textHoverColor: "#fafafa",
        mainTableColor: "#2563eb",
        focusColor: "#1d4ed8",
        zebraColor: "#dbeafe",
      },
    },
  },
  plugins: [],
};
