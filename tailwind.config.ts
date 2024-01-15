import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkmode: false,
  theme: {
    extend: {
      screens: {
        "xs": { max: '389px' }
      },
      colors: {
        'primaryBlack': "#0F0F0F",
        'primaryOrange': "#DA581C"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home1':
          "linear-gradient(90deg, rgba(15,15,15,1) 30%, rgba(15,15,15,0.2) 100%), url('../../public/images/background1.png')",
        'home2':
          "linear-gradient(180deg, rgba(15,15,15,1) 30%, rgba(15,15,15,0.2) 100%), url('../../public/images/bg2.png')"
      },
    },
  },
  plugins: [require('autoprefixer')],
}
export default config
