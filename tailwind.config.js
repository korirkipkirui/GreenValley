module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF50',
        'primary-dark': '#388E3C',
        'primary-light': '#C8E6C9',
        'secondary': '#FF9800',
        'light-bg': '#f8f9fa',
        'dark-text': '#2c3e50',
        'light-text': '#f5f5f5',
        'gray': '#757575',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
