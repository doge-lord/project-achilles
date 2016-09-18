export declare class Deferred<T> {
    private _promise;
    private _resolve;
    private _reject;
    constructor();
    promise: Promise<T>;
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}
