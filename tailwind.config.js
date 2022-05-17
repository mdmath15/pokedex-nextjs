module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'2xl': { max: '1535px' },

				'xl': { max: '1279px' },

				'lg': { max: '1023px' },

				'md': { max: '767px' },

				'sm': { max: '552px' },

				'min-md': { min: '768px' }
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
