/** @param text */
export function createSlug(text: string): string {
	return encodeURIComponent(text).toLowerCase().replace(/%20/g, "-");
}

/** @param timestamp */
export function getPrettyDate(timestamp: string): string {
	const date = new Date(timestamp);
	return date.toLocaleDateString();
}
