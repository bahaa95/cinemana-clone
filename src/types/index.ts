export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

export type File = { publicId: string; url: string };

export type Copy<T> = Pick<T, keyof T>;
