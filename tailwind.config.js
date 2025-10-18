import { Config } from 'tailwindcss';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/pliny/**/*.js',
    './src/components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        greenHortti: '#006F48',
        greenHorttiBg: '#EBFFEE',
        grayHortti: '#2E2E2E',
        graySubtitleHortti: '#757575',
        orangeHortti: '#F56932'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
