import plugin from "tailwindcss";

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
        "neutral-primary": "#0C0D0D", // app default
        "static-primary": "#F5F5F5",
        "neutral-tertiary": "#868686",
        "neutral-secondary": "#555556",
      },
      borderColor: {
        neutral: "#001B5229",
        success: "#B4DDC9",
        warning: "#FBF4EB",
        danger: "#F7C1BC",
        "neutral-elevated": "#001B5252",
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
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `not-disabled` variant
      addVariant("not-disabled", "&:not(:disabled)");
    }),
  ],
  variants: {
    extend: {
      extend: {
        cva: true,
      },
    },
  },
};
