/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Gilroy': ['Gilroy'],
        'Konexy':['Konexy Personal Use'],
        'Inter':['Inter']
      },
    },
    boxShadow: {
      'card': '0px 20px 60.57143px 0px #E5E9F6',
    },
    colors: {
      'white':'#ffffff',
      'secondaryWhite':'#F6F6F6',
      'black':'#000000',
      'secondaryBlack':'#0D0D0D',
      'purple':'#6022EA',
      'pink':'#FA00FF',
    },
    container:{
      padding:'14px',
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'992px',
      'xl':'1320px',
    },
  },
  plugins: [],
}

