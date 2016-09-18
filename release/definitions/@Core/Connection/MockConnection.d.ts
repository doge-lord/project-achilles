import { IConnection } from '../Shared/Interfaces/IConnection';
export declare class MockConnection implements IConnection<any> {
    connect(onMessageReceived: (t: any) => any): Promise<any>;
    sendData(t: any): any;
}
