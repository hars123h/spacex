/** @type {import('tailwindcss').Config} */
// 0b8fcb #0f1c28
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow':'0px 0px 4px 4px #ae9bc8',
      },
      colors: {
        'regal-blue': '#243c5a',
        'red-800': '#0b8fcb',
        'recharge-bg':'#f2f2f2',
        'withdraw': '#f2f2f2',
        "ntxt":'#cccccc',
        'invbg':'#666666',
        'record_bg':'#ededed',
        'record_sl':'#d1d0d0',
        'team_sl':'#dbdbdb'
      },
      animation: {
        marquee: 'marquee 8s linear infinite',
        marquee2: 'marquee2 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
}