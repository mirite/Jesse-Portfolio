export function createSlug(text: string): string {
    return encodeURIComponent(text).toLowerCase().replace(/%20/g, '-');
}
