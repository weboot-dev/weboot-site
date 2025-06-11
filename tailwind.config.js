/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f0fa',
          100: '#d9d9f2',
          200: '#b0b1e0',
          300: '#8889ce',
          400: '#5f60bc',
          500: '#3E4095', // sua cor base da logo
          600: '#373987',
          700: '#2c2f70',
          800: '#222459',
          900: '#171942',
        },
        secondary: {
          50: '#e6f9f7',
          100: '#ccf3ef',
          200: '#99e7df',
          300: '#66dbcf',
          400: '#33cfbf',
          500: '#00c3af',
          600: '#009c8c',
          700: '#007569',
          800: '#004e46',
          900: '#002723',
        },
        accent: {
          50: '#fff2e6',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#cc6600',
          700: '#994d00',
          800: '#663300',
          900: '#331a00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}