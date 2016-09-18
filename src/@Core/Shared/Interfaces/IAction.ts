export interface IAction<T> {

    new (t: T, ...args: any[]): T;

    execute(): boolean;

}