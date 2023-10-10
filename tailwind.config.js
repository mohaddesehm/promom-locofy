/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-white-100": "#fff",
        "main-green-100": "#2fa364",
        "text-primary-black-100": "#1c1c1c",
        "main-stroke": "#dde1e6",
        "main-green-10": "#eaf6ef",
        "main-green-3": "#f9fcfa",
        "text-secondary-black-40": "#a4a4a4",
        "main-inactive-button": "#e8e8e8",
      },
      spacing: {},
      fontFamily: {
        "system-text-styles-h5-titles-button": "Rubik",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
