import path from "node:path";
import { general, getTailwind, react } from "@mirite/eslint-config-mirite";
import pluginNext from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default [
	...general,
	...react,
	...getTailwind("./src/app/globals.css"),
	{
		plugins: {
			"@next/next": pluginNext,
		},
		rules: {
			"@typescript-eslint/no-floating-promises": "warn",
			"@typescript-eslint/no-unsafe-assignment": "warn",
			"@typescript-eslint/no-unsafe-member-access": "warn",
		},
		settings: {
			tailwindcss: {
				callees: ["classnames", "clsx", "ctl", "twMerge"],
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
	...defineConfig({
		extends: [tseslint.configs.disableTypeChecked],
		files: ["**/*.js"],
	}),
];
