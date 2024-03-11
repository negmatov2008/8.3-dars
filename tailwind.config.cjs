/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif']
			},
			backgroundImage: {
				main: 'url(/src/assets/background.png)'
			}
		}
	},
	plugins: []
}
