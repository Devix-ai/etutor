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
        formpurple:'#8458F8'

      }
    },
    screens: {
      'mb': {'min': '300px', 'max': '600px'},
      'lg':{'min':'900px','max':'1350px'},
    },
  },
  plugins: [],

  
}

// 5E5490