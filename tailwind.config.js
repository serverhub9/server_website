module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path to match your project structure
    "./node_modules/preline/dist/*.js", // Include Preline's components
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite', // Ensure the spin animation is included
      },
      // Add customizations if needed
    },
  },
  plugins: [
    require('preline/plugin'), // Add Preline as a plugin
  ],
};

