export interface IConnection<T> {
    connect(onMessageReceived: (t: T) => any): Promise<any>;
    sendData(t: T): any;
}
