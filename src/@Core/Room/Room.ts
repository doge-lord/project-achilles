import {User} from '../User/User';
import {IGameSpec} from '../Game/IGameSpec';
import {Game} from '../Game/Game';
import {IFactory} from '../Shared/Interfaces/IFactory';
import {FactoryProducerInstance} from '../FactoryProducer';

export class Room {

    private _id: number;

    private _host: User;

    private _users: User[];

    private _gameSelected: IGameSpec;

    private _game: Game;

    private _gameSpecFactory: IFactory<IGameSpec>;

    /**
     * Creates an instance of Room.
     * 
     * @param {number} id
     * @param {User} host
     * @param {string} gameType
     * 
     * @memberOf Room
     */
    constructor(id: number, host: User, gameType: string) {
        this._gameSpecFactory = FactoryProducerInstance().getGameSpecFactory();
        this._id = id;
        this._host = host;
        this._users = [];
        this._users.push(host);
        this._gameSelected = this._gameSpecFactory.create(gameType);
    }

}