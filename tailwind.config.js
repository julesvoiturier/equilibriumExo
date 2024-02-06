/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "bodyBlue": "#0d192b",
      "cardBlue": "#14253d",
      "white": "#f1f1f1",
      "cyan": "#00fff7",
      "softBlue": "	#8bacda",
    },
    extend: {
      backgroundImage: {
        "cardImg": "url('/public/assets/images/image-equilibrium.jpg')",
        "ethLogo": "url('/public/assets/images/icon-ethereum.svg')",
        "clock": "url('/public/assets/images/icon-clock.svg')",
        "avatar": "url('/public/assets/images/image-avatar.png')",
        "iconView": "url('/public/assets/images/icon-view.svg')",
      },
    },
  },
  plugins: [],
}

