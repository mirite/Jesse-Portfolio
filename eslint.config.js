import { general, react, tailwind } from "@mirite/eslint-config-mirite";
import pluginNext from "@next/eslint-plugin-next";
import path from "node:path";

export default [
	...general,
	...react,
	...tailwind,
	{
		plugins: {
			"@next/next": pluginNext,
		},
		settings: {
			tailwindcss: {
				config: path.resolve("src", "app", "globals.css"),
				callees: ["classnames", "clsx", "ctl", "twMerge"],
			},
		},
		rules: {
			"@typescript-eslint/no-unsafe-member-access": "warn",
			"@typescript-eslint/no-floating-promises": "warn",
			"@typescript-eslint/no-unsafe-assignment": "warn",
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			...pluginNext.configs.recommended.rules,
		},
	},
];
