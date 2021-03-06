module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f2f8ff',
          200: '#c4d3f9',
          300: '#8f89bf',
          400: '#50449c'
        }
      },
      screens: {
        'custom-1': '1296px'
      },
    },
  },
  plugins: [],
}
