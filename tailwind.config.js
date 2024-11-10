/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 1.0s ease-out forwards',
      },
      boxShadow: {
        'custom-top-left': '-1px -5px 10px rgba(0, 0, 0, 0.2)', 
        'custom-top-right': '5px -5px 10px rgba(0, 0, 0, 0.2)', 
        'custom-bottom-left': '-5px 5px 10px rgba(0, 0, 0, 0.2)', 
        'custom-bottom-right': '5px 5px 10px rgba(0, 0, 0, 0.2)', 
      },
    },
  },
  plugins: [],
}
