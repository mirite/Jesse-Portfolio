import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				xs: "475px",
			},
			colors: {
				"blue-green": {
					50: "#1A2E25",
					100: "#1A2E25",
					200: "#1A2E25",
					300: "#1A2E25",
					400: "#1A2E25",
					500: "#1A2E25",
					600: "#1A2E25",
					700: "#1A2E25",
					800: "#1A2E25",
					900: "#1A2E25",
				},
				high: { DEFAULT: "#709226" },
				medium: { DEFAULT: "#7cca65" },
				starter: { DEFAULT: "#2dc2b5" },
			},
			// @ts-expect-error TS7031 TailwindCSS Typography
			typography: ({ theme }) => ({
				"blue-green": {
					css: {
						"--tw-prose-body": "#1A2E25",
						"--tw-prose-headings": "#1A2E25",
						"--tw-prose-lead": "#1A2E25",
						"--tw-prose-links": "#1A2E25",
						"--tw-prose-bold": "#1A2E25",
						"--tw-prose-counters": "#1A2E25",
						"--tw-prose-bullets": "#1A2E25",
						"--tw-prose-hr": "#1A2E25",
						"--tw-prose-quotes": "#1A2E25",
						"--tw-prose-quote-borders": "#1A2E25",
						"--tw-prose-captions": "#1A2E25",
						"--tw-prose-code": "#1A2E25",
						"--tw-prose-pre-code": "#1A2E25",
						"--tw-prose-pre-bg": "#1A2E25",
						"--tw-prose-th-borders": "#1A2E25",
						"--tw-prose-td-borders": "#1A2E25",
						"--tw-prose-invert-body": theme("colors.white"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.white"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.white"),
						"--tw-prose-invert-bullets": theme("colors.white"),
						"--tw-prose-invert-hr": theme("colors.white"),
						"--tw-prose-invert-quotes": theme("colors.white"),
						"--tw-prose-invert-quote-borders": theme("colors.white"),
						"--tw-prose-invert-captions": theme("colors.white"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.white"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders": theme("colors.white"),
						"--tw-prose-invert-td-borders": theme("colors.white"),
					},
				},
			}),
		},
	},
	darkMode: "class",
	plugins: [typography, forms],
};

export default config;
