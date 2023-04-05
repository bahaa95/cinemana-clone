export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

export type File = { publicId: string; url: string };

export type Copy<T> = Pick<T, keyof T>;

export type Nullable<T> = { [P in keyof T]: T[P] | null };
