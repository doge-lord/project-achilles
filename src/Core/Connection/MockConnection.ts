import {IConnection} from '../Shared/Interfaces/IConnection';

export class MockConnection implements IConnection<any> {

    connect(onMessageReceived: (t: any) => any): Promise<any> {
        return;
    }

    sendData(t: any): any {
        return;
    }

}