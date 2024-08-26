/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#8653FF',
        customPink: '#00DAE5',
        darkBlue: '#534988',
        customOrange: '#FF9580',
        cardbg: '#EDE9FA',
        purple: '#D2C7F3',
        blue:'#5553C4',
        darkpurple:'#685AAD',
        purpleBtn:'#DBCAFF',
        btnbg:'#9184F0',
        questionbg:'#EDE8FA',
        lightpurple:'#9B85C8',
        formpurple:'#8458F8',
        lightgray:'#534988',
        lightblue:'#635BFF'
      },
      fontFamily: {
        roboto: ['Roboto-Condensed', 'sans-serif'],
      },
    },
    screens: {
      'mb': {'min': '280px', 'max': '1000px'},
      'tb': {'min': '600px', 'max': '1000px'},
      'lg':{'min':'1000px','max':'1300px'},
      'xl':{'min':'1300px','max':'1700px'},
      '2xl':{'min':'1600px'}
    },
  },
  plugins: [
    
  ],

  
}
