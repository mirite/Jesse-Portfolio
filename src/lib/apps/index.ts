const defaultURLSuffix = ".app.jesseconner.ca";
const defaultGithubPrefix = "https://github.com/mirite/";
const defaultNpmPrefix = "https://www.npmjs.com/package/@mirite/";

const apps = [
	{
		name: "CSV Magic",
		url: `https://csvmagic${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}csv-magic`,
		blog: "/blog/re-visiting-csv-magic",
	},
	{
		name: "SVG Magic",
		url: `https://svgmagic${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}svg-magic`,
	},
	{
		name: "wordhecc",
		url: `https://wordhecc${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}wordhecc`,
		blog: "/blog/wordhecc",
	},
	{
		name: "3D Label Helper",
		url: `https://models${defaultURLSuffix}/`,
		github: `${defaultGithubPrefix}bottle-helper`,
	},
	{
		name: "CSV to JSON Parser",
		github: `${defaultGithubPrefix}csv-json-parser`,
		npm: `${defaultNpmPrefix}csv-json-parser`,
		blog: "/blog/rust-csv-parser-for-javascript",
	},
	{
		name: "Sudoku Solver",
		github: `${defaultGithubPrefix}sudoku-solver`,
		blog: "/blog/sudoku-solver",
	},
	{
		name: "Web Crawler",
		github: `${defaultGithubPrefix}Node-Site-Crawler`,
		blog: "/blog/web-crawler",
		npm: `https://www.npmjs.com/package/simple-node-site-crawler`,
	},
	{
		name: "Site Archive",
		github: `${defaultGithubPrefix}site-archive`,
		npm: `https://www.npmjs.com/package/site-archive`,
	},
	{
		name: "Zod to Mongoose",
		github: `${defaultGithubPrefix}zod-to-mongoose`,
		npm: `${defaultNpmPrefix}zod-to-mongoose`,
	},
];

/**
 * Get the apps that I've made.
 *
 * @returns The array of apps.
 */
export function getApps(): AppListing[] {
	return apps.sort((a, b) => a.name.localeCompare(b.name));
}
export type AppListing = (typeof apps)[number];
