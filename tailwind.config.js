/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-backgroundColor1"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        16: "4rem", // h-16
        24: "6rem", // h-24
        32: "8rem", // h-32
        40: "10rem", // h-40
        56: "14rem", // h-56
        64: "16rem", // h-64
      },
      screens: {
        mdd: { max: "919px" },
        smm: { max: "785px" },
        xs: { max: "479px" }, // @media(max-width:1535px)
        sm: { max: "639px" },
        md: { max: "767px" },
        lg: { max: "1023px" },
        lgg: { max: "1203px" },
        xl: { max: "1279px" },
        "2xl": { max: "1535px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkSecondary: "#1b1b1b",
        dark: "#31465c",
        dark2: "#67568c",
        light: "#ede7e2",
        light2: "#e7c5b4",

        lightyinBlue: "#464D77",
        lightTeal: "#36827F",
        lightNaples: "#F9DB6D",
        lightSnow: "#F4EDED",
        lightPeriwinkle: "#BEB8EB",
        lightFrenchGrey: "#C8BFC7",
        lightVertigress: "#489f9C",

        darkVanilla: "#FFEDAC",
        darkRaisin: "#1C2128",
        darkVista: "#8F9EF5",
        darkicebBlue: "#9FF5F2",

        dumby2: "#d9a7c7",
        dumby3: "#71b6e8",
      },

      backgroundImage: (theme) => ({
        "gradient-light": `linear-gradient(to right, #fffcdc, ${theme(
          "colors.dumby2"
        )})`,
        "gradient-dark": `linear-gradient(to right, #2f70bc, ${theme(
          "colors.dumby3"
        )})`,
      }),
    },
  },
  plugins: [],
};
