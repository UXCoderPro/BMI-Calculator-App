module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ['"Amiri"', "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
      colors: {
        primary: "#FF0084",
        box: "rgba(255,255,255,0.40)",
        text: {
          DEFAULT: "#FFFFFF", // your main Text
          light: "rgba(235,235,245,0.60)", // light text
          dark: "#191919",
        },
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(180deg,rgba(255,255,255,0.90) 0%,rgba(255,255,255,0.60) 100%)",
        "box-gradient":
          "linear-gradient(181deg,rgba(255,255,255,0.50) 1.15%,rgba(255,255,255,0.00) 98.91%)",
        "primary-gradient":
          "linear-gradient(181deg,#F051A3 1.15%,rgba(240,81,163,0.00) 98.91%)",
        "highlight-gradient":
          "linear-gradient(104deg,#F051A3 -7.37%,#2067F4 129.34%)",
      },
    },
  },
  plugins: [],
};
