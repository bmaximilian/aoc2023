export const keysOf = <T extends NonNullable<unknown>>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
