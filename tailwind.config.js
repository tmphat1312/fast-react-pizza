/** @type {import('tailwindcss').Config} */

import ctnQueryPlugin from '@tailwindcss/container-queries';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      colors: {
        primary: colors.yellow,
      },
    },
  },
  plugins: [ctnQueryPlugin],
};
