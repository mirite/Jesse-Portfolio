import path from "path";

import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom",
		dir: "tests",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
