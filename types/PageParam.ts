export type PageParams<T extends Record<string, unknown>> = { params: T };
export type CatParam = { catId: string };
export type CatPageParams = PageParams<CatParam>;
