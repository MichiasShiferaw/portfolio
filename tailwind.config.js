/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        xl: { max: "1279px" },
        "2xl": { max: "1535px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
