/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover-image': "url(public/desktop/image-hero.jpg)",
        'image-interactive' : "url{public/desktop/image-interactive.jpg",
      }
    },
  },
  plugins: [],
}