/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['PT SANS'],
			oswald: ['Oswald, sans-serif'],
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				mainorange: {
					50: '#fef8ee',
					100: '#fdeed7',
					200: '#fadaae',
					300: '#f7be7a',
					400: '#f39944',
					500: '#ef7c20',
					600: '#e06216',
					700: '#ba4a14',
					800: '#943b18',
					900: '#773217',
					950: '#40170a',
				},
				mainaccent: {
					50: '#f5f2ff',
					100: '#ece7ff',
					200: '#ddd1ff',
					300: '#c4acff',
					400: '#a77eff',
					500: '#8e4aff',
					600: '#8225ff',
					700: '#7c20ef',
					800: '#610fc8',
					900: '#510fa3',
					950: '#31066f',
				},
				mainblue: {
					50: '#f0fdfb',
					100: '#cdfaf5',
					200: '#9af5ea',
					300: '#60e8de',
					400: '#36d3cc',
					500: '#16b6b1',
					600: '#0f9291',
					700: '#117374',
					800: '#125c5d',
					900: '#144c4d',
					950: '#052c2e',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
