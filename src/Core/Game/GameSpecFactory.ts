declare function require(moduleName: string): any;

import {IGameModules} from '../Shared/Interfaces/IGameModules';
import {IGameSpec} from './IGameSpec';
import {IFactory} from '../Shared/Interfaces/IFactory';

export class GameSpecFactory implements IFactory<IGameSpec> {

    private _gameModules: IGameModules;

    /**
     * Creates an instance of GameSpecFactory.
     * 
     * @param {IGameModules} gameModules
     * 
     * @memberOf GameSpecFactory
     */
    constructor(gameModules: IGameModules) {
        this._gameModules = gameModules;
    }

    /**
     * Returns a GameSpec based on the input game type.
     * 
     * @param {string} gameType
     * @returns {IGameSpec}
     * 
     * @memberOf GameSpecFactory
     */
    public create(gameType: string): IGameSpec {
        if (this._gameModules[gameType]) {
            let gameModule: any = require(this._gameModules[gameType].path + '/GameSpec');

            if (gameModule) {
                return gameModule;
            }
        }
    }

}