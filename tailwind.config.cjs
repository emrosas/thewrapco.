/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			title: ['Tanker', 'sans-serif']
		},
		extend: {
			letterSpacing: {
				extrawide: '1rem',
				superwide: '2.25rem'
			},
			fontSize: {
				'10xl': ['10rem', '90%']
			},
			colors: {
				'dark-1': '#343B2B',
				'dark-2': '#884415',
				'brand-1': '#C6C66C',
				'brand-2': '#DB8152',
				'light-1': '#FBFBF9',
				'light-2': '#FFD699'
			}
		}
	},
	plugins: []
}
