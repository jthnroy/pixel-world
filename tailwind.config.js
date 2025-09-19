/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00485E',
          light: '#F4F7F8',
        },
        surface: {
          primary: '#00485E',
          'primary-light': '#F4F7F8',
        },
        text: {
          primary: '#00485E',
          neutral: '#58595B',
          'high-contrast': '#000',
          'on-primary': '#FFF',
        },
        stroke: {
          primary: '#00485E',
          'neutral-light': '#DEDEDE',
        },
        success: {
          50: '#CAFCE5',
          300: '#02C38D',
          400: '#01A577',
        },
        gradient: {
          'pink-start': '#FBECFA',
          'pink-end': 'rgba(251, 236, 250, 0.00)',
        },
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(180deg, #FBECFA -28.37%, rgba(251, 236, 250, 0.00) 100%)',
        'gradient-white': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 137.24%)',
        'gradient-success': 'linear-gradient(180deg, #CAFCE5 0%, #FFF 100%)',
      },
      borderRadius: {
        '4': '4px',
        '6': '6px',
        '16': '16px',
        '24': '24px',
        '50': '50px',
      },
      fontFamily: {
        'roboto': ['Roboto', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '4.5': '18px',
        '30': '120px',
      },
      backdropBlur: {
        '75': '75px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
