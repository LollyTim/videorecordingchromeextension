/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				work_sans: ["Work Sans", "sans-serif"],
			},
			colors: {
				dark_blue: "#120B48",
				dark_black: "#141414",
				line: "#F4F6F8",
				text: "#616163",
				sub_header: "#1B233D",
				login_text: "#434343",
				border: "#B6B3C6",
				modal_text: "#413C6D",
			},
		},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Other plugins as needed
  ],
};

