export type Query = Record<string, any>;
export type Id = string | number;
export interface DatabaseRepository<T> {
    create(data: Partial<T>, query?: Query): Promise<T>;
    list(query?: Query): Promise<T[]>;
    get(id: Id, query?: Query): Promise<T>;
}