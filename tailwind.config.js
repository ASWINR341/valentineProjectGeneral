/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'love-cats': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ctext x='10' y='20' font-size='16' fill='%23ff6699' %3E❤%3C/text%3E%3Ctext x='30' y='30' font-size='16' fill='%23ffcc00' %3E🐱%3C/text%3E%3C/svg%3E\")"
      },
    },
  },
  plugins: [],
};
