/**
 * Slugify a string
 *
 * @param text The text to slugify
 * @returns The slugified text
 */
export function createSlug(text: string): string {
	return encodeURIComponent(text).toLowerCase().replace(/%20/g, "-");
}

/**
 * Get a pretty date from a timestamp
 *
 * @param timestamp The timestamp to convert
 * @returns The pretty date
 */
export function getPrettyDate(timestamp: string): string {
	const date = new Date(timestamp);
	return date.toLocaleDateString();
}
