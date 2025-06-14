/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				inter: ["Inter"],
				poppins: ["Poppins", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
				roboto: ["Roboto", "sans-serif"]
			},
			boxShadow: {
				custom: '0px 2px 20px 0px rgba(0, 0, 0, 0.15)',
				custom2: '0px 0px 4px 0px rgba(0, 0, 0, 0.7)',
				custom3: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
				custom4: '0px 0px 40px 0px rgba(0, 0, 0, 0.06)',
				custom5: '0px 4px 4px 0px rgba(0, 0, 0, 0.07)',
				custom6: '0px 3px 8px 0px rgba(0, 0, 0, 0.24)',
				custom7: '0px 4px 54px 0px rgba(149, 194, 43, 0.25)',
				custom8: '0px 24px 24px -8px rgba(14, 63, 126, 0.04)',
				custom9: '0px 4px 4px 2px rgba(0, 0, 0, 0.07)'
			},
			animation: {
				"scroll": 'scroll 15s linear infinite ',
				"caret-blink": "caret-blink 1.25s ease-out infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"wiggle": 'wiggle 0.5s ease-in-out',
			},
			keyframes: {
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
				"scroll": {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"wiggle": {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-10deg)' },
					'75%': { transform: 'rotate(10deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
			},
			screens: {
				'small': '426px',
				'med': '769px',
				'[950px]': '950px',
				'large': '1024px',
				'[500px]': '500px',
				'[939px]': '939px'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}

