/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12142B',
          light: '#1B1E3D',
          border: '#2A2E52'
        },
        paper: '#EDE7D9',
        gold: {
          DEFAULT: '#E8A33D',
          dim: '#B87F2C'
        },
        teal: {
          DEFAULT: '#1F8A70',
          dim: '#166B57'
        },
        brick: '#C1502E'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sign: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif']
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
}
