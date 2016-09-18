import { User } from '../User/User';
export declare class Room {
    private _id;
    private _host;
    private _users;
    private _gameSelected;
    private _game;
    private _gameSpecFactory;
    constructor(id: number, host: User, gameType: string);
}
