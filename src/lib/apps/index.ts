const defaultURLSuffix = ".app.jesseconner.ca";
const defaultGithubPrefix = "https://github.com/mirite/";
const defaultNpmPrefix = "https://www.npmjs.com/package/@mirite/";

const apps = [
	{
		blog: "/blog/re-visiting-csv-magic",
		github: `${defaultGithubPrefix}csv-magic`,
		name: "CSV Magic",
		url: `https://csvmagic${defaultURLSuffix}`,
	},
	{
		github: `${defaultGithubPrefix}svg-magic`,
		name: "SVG Magic",
		url: `https://svgmagic${defaultURLSuffix}`,
	},
	{
		blog: "/blog/wordhecc",
		github: `${defaultGithubPrefix}wordhecc`,
		name: "wordhecc",
		url: `https://wordhecc${defaultURLSuffix}`,
	},
	{
		github: `${defaultGithubPrefix}bottle-helper`,
		name: "3D Label Helper",
		url: `https://models${defaultURLSuffix}/`,
	},
	{
		blog: "/blog/rust-csv-parser-for-javascript",
		github: `${defaultGithubPrefix}csv-json-parser`,
		name: "CSV to JSON Parser",
		npm: `${defaultNpmPrefix}csv-json-parser`,
	},
	{
		blog: "/blog/sudoku-solver",
		github: `${defaultGithubPrefix}sudoku-solver`,
		name: "Sudoku Solver",
	},
	{
		blog: "/blog/web-crawler",
		github: `${defaultGithubPrefix}Node-Site-Crawler`,
		name: "Web Crawler",
		npm: `https://www.npmjs.com/package/simple-node-site-crawler`,
	},
	{
		github: `${defaultGithubPrefix}site-archive`,
		name: "Site Archive",
		npm: `https://www.npmjs.com/package/site-archive`,
	},
	{
		github: `${defaultGithubPrefix}zod-to-mongoose`,
		name: "Zod to Mongoose",
		npm: `${defaultNpmPrefix}zod-to-mongoose`,
	},
];

export type AppListing = (typeof apps)[number];
/**
 * Get the apps that I've made.
 *
 * @returns The array of apps.
 */
export function getApps(): AppListing[] {
	return apps.sort((a, b) => a.name.localeCompare(b.name));
}
