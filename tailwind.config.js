/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringColor: {
        neutral: "#001B5229",
        brand: "#185ADB",
      },
      textColor: {
        secondary: "#555556",
      },
      borderColor: {
        neutral: "#001B5229",
        brand: "#185ADB",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundColor: {
        radio: { neutral: "#001B520A", warning: "#FBF4EB" },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      extend: {
        cva: true,
      },
    },
  },
};
