/**
 * Deferred object similar to Angular's $q.defer() and Kris Kowals' Q.defer().
 * Wraps native ES6 Promise to a Deferred object.
 * 
 * @export
 * @class Deferred
 * @template T
 */
export class Deferred<T> {

    private _promise: Promise<T>;

    private _resolve: (value?: T | PromiseLike<T>) => void;

    private _reject: (reason?: any) => void;

    /**
     * Creates an instance of Deferred.
     * 
     * @memberOf Deferred
     */
    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    /**
     * The wrapped ES6 Promise.
     * 
     * @readonly
     * @type {Promise<T>}
     * @memberOf Deferred
     */
    public get promise(): Promise<T> {
        return this._promise;
    }

    /**
     * Resolve the promise with a return value or another Promise.
     * 
     * @readonly
     * 
     * @memberOf Deferred
     */
    public get resolve(): (value?: T | PromiseLike<T>) => void {
        return this._resolve;
    }

    /**
     * Reject the value with a reason/error.
     * 
     * @readonly
     * 
     * @memberOf Deferred
     */
    public get reject(): (reason?: any) => void {
        return this._reject;
    }

}