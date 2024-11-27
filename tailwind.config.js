/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringColor: {
        neutral: "#001B5229",
      },
      textColor: {
        secondary: "#555556",
        warning: "#BA5C00",
        danger: "#CC2414",
        neutral: {
          primary: "#0C0D0D",
          secondary: "#555556",
          tertiary: "#868686",
        },
      },
      borderColor: {
        success: "#B4DDC9",
        warning: "#FBF4EB",
        danger: "#F7C1BC",
        neutral: {
          default: "#001B5229",
          elevated: "#001B5252",
        },
      },
      borderWidth: {
        1: "1px",
        1.5: "1.5px",
      },
      backgroundColor: {
        neutral: "#001B520A",
        warning: "#FBF4EB",
        success: "#ECF6F1",
        danger: "#FDEFEE",
      },
      colors: {
        success: "#0C7D44",
        brand: {
          standard: "#185ADB",
          light: "#EDF2FC",
          disabled: "#6A96ED4D",
        },
      },
      gap: {
        9.5: "38px",
      },
      height: {
        18: "72px",
      },
      borderRadius: {
        xs: "6px",
      },
      fontSize: {
        h2: "40px",
        h4: "24px",
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
