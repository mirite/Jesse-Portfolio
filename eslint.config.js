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
			},
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			...pluginNext.configs.recommended.rules,
		},
	},
];
