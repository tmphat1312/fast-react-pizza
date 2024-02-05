/** @type {import('tailwindcss').Config} */

import ctnQueryPlugin from '@tailwindcss/container-queries';
import formPlugin from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [ctnQueryPlugin, formPlugin],
};
