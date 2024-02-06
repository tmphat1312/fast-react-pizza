/** @type {import('tailwindcss').Config} */

import ctnQueryPlugin from '@tailwindcss/container-queries';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
      },
    },
  },
  plugins: [ctnQueryPlugin],
};
