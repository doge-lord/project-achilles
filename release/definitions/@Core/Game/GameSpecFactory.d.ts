import { IGameModules } from '../Shared/Interfaces/IGameModules';
import { IGameSpec } from './IGameSpec';
import { IFactory } from '../Shared/Interfaces/IFactory';
export declare class GameSpecFactory implements IFactory<IGameSpec> {
    private _gameModules;
    constructor(gameModules: IGameModules);
    create(gameType: string): IGameSpec;
}
