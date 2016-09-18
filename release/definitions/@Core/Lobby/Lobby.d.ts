import { User } from '../User/User';
export declare class Lobby {
    private _rooms;
    private _users;
    constructor();
    createRoom(hostId: number, gameType: string): void;
    userJoin(user: User): void;
    private generateRoomId();
}
