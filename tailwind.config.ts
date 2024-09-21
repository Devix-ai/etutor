import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: '#8653FF',
        customPink: '#00DAE5',
        darkBlue: '#534988',
        customOrange: '#FF9580',
        cardbg: '#EDE9FA',
        purple: '#D2C7F3',
        blue: '#5553C4',
        darkpurple: '#685AAD',
        purpleBtn: '#DBCAFF',
        btnbg: '#9184F0',
        questionbg: '#EDE8FA',
        lightpurple: '#9B85C8',
        formpurple: '#8458F8',
        lightgray: '#534988',
        lightblue: '#635BFF',
        reviewbg: '#DAD1F2'
      },
      fontFamily: {
        roboto: ['Roboto-Condensed', 'sans-serif'],
        azonix: ['azonix'],
        roboto_medium: ['roboto_medium']
      },
    },
    screens: {
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'custom-lg': {'min': '1024px'},
      'custom-xl': {'min': '1280px'},
      'custom-2xl': {'min': '1536px'},
      'mb': {'min': '280px', 'max': '1000px'},
      'tb': {'min': '600px', 'max': '1000px'},
      'lg': {'min': '1000px', 'max': '1300px'},
      'xl': {'min': '1300px', 'max': '1700px'},
      '2xl': {'min': '1600px'}
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default config;