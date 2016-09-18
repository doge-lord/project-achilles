import * as _ from 'lodash';
import {Room} from '../Room/Room';
import {User} from '../User/User';

export class Lobby {

    private _rooms: Room[];

    private _users: User[];

    /**
     * Creates an instance of Lobby.
     * 
     * @memberOf Lobby
     */
    constructor() {
        this._rooms = [];
        this._users = [];
    }

    /**
     * Create a new Room instance and push it to the lobby's rooms collection.
     * The new room's selected will be the input game type.
     * 
     * @param {number} hostId
     * @param {string} gameType
     * 
     * @memberOf Lobby
     */
    public createRoom(hostId: number, gameType: string): void {
        let host: User = _.find(this._users, user => hostId === user.id);
        this._rooms.push(new Room(this.generateRoomId(), host, gameType));
    }

    /**
     * Adds the input user to the lobby's users collection.
     * Will not add the user if user already exists in the said collection. 
     * 
     * @param {User} user
     * 
     * @memberOf Lobby
     */
    public userJoin(user: User): void {
        if (!_.includes(this._users, user)) {
            this._users.push(user);        
        }
    }

    /**
     * Generates and returns a unique room ID.
     * 
     * @private
     * @returns {number}
     * 
     * @memberOf Lobby
     */
    private generateRoomId(): number {
        return Date.now();
    }

}