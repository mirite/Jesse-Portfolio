export type ContentType<S extends string, T extends object> = {
	contentTypeId: S;
	fields: T;
};
