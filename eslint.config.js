import { general, react, tailwind } from "@mirite/eslint-config-mirite";
import pluginNext from "@next/eslint-plugin-next";

export default [
	...general,
	...react,
	...tailwind,
	{
		plugins: {
			"@next/next": pluginNext,
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			...pluginNext.configs.recommended.rules,
		},
	},
];
