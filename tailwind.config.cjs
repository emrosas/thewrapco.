/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			title: ['Tanker', 'sans-serif'],
			body: ['Poppins', 'sans-serif']
		},
		extend: {
			letterSpacing: {
				extrawide: '1rem',
				superwide: '2.25rem'
			},
			backgroundImage: {
				'conic-gradient': 'conic-gradient(from 180deg at 50% 80%, #FFD699 0deg, #F9E9C8 360deg)'
			},
			fontSize: {
				'10xl': ['10rem', '90%']
			},
			padding: {
				page: '3rem',
				'page-tablet': '2rem',
				'page-mobile': '1rem'
			},
			margin: {
				page: '3rem',
				'page-tablet': '2rem',
				'page-mobile': '1rem'
			},
			colors: {
				'dark-1': '#343B2B',
				'dark-2': '#3F4D2D',
				'dark-3': '#884415',
				'brand-1': '#C6C66C',
				'brand-2': '#DB8152',
				'brand-3': '#FF9729',
				'light-1': '#FBFBF9',
				'light-2': '#FFD699',
				'light-3': '#EAEA7B'
			}
		}
	},
	plugins: []
}
