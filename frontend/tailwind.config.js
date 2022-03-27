module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientAnimation: {
          "0%, 100%": {
            backgroundPosition: "50% 0%",
          },
        },
      },
      animation: {
        gradientAnimation: "gradientAnimation 1s ease infinite",
      },
    },
  },
  plugins: [],
};
