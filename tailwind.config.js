/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        secondary: "#555556",
      },
      borderColor: {
        neutral: "#001B5229",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundColor: {
        radio: { neutral: "#001B520A" },
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
