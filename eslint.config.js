import path from "node:path";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactLint from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();
const __dirname = path.resolve();
const config = [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: { import: fixupPluginRules(importPlugin) },
		rules: {
			"import/no-cycle": "error",
			"import/first": "error",
			"import/no-useless-path-segments": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"import/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "warn",
		},
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		rules: {
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/consistent-type-imports": "error",
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": "error",
		},
	},
	{
		ignores: [
			"dist/**/*",
			".yarn/**/*",
			".next/**/*",
			"playwright-report/**/*",
			"coverage/**/*",
		],
	},
	...fixupConfigRules(
		...compat.config({
			extends: ["plugin:react-hooks/recommended"],
			plugins: ["react-hooks"],
		}),
	),

	...fixupConfigRules({
		...reactLint,
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-no-target-blank": "off",
			"react/boolean-prop-naming": "warn",
			"react/button-has-type": "warn",
			"react/jsx-max-depth": ["warn", { max: 3 }],
			"react/jsx-no-useless-fragment": "warn",
			"react/no-unstable-nested-components": "warn",
			"react/no-unused-prop-types": "warn",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
	}),
	...compat.config({
		plugins: ["eslint-plugin-tailwindcss"],
		extends: ["plugin:tailwindcss/recommended"],
		rules: {
			"tailwindcss/classnames-order": "off",
			"tailwindcss/no-custom-classname": [
				"warn",
				{
					callees: ["twMerge"],
					cssFiles: [],
				},
			],
		},
		settings: {
			tailwindcss: {
				callees: ["classnames", "clsx", "ctl", "twMerge"],
				config: path.resolve(__dirname, "./tailwind.config.cjs"),
				cssFiles: [
					"**/*.css",
					"!**/node_modules",
					"!**/vendor",
					"!**/.*",
					"!**/dist",
					"!**/build",
				],
				cssFilesRefreshRate: 5_000,
				removeDuplicates: true,
				skipClassAttribute: false,
				whitelist: [],
				tags: [],
				classRegex: "^class(Name)?$",
			},
		},
	}),
];
export default config;
