module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        primaryColor: "#3b82f6",
        secondaryColor: "#f6f6f6",
      },
      flex: {
        0.4: "0.4 0.4 0%",
      },
    },
  },
  plugins: [],
};
