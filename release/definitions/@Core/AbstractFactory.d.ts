import { IFactory } from './Shared/Interfaces/IFactory';
import { IGameModules } from './Shared/Interfaces/IGameModules';
import { IGameSpec } from './Game/IGameSpec';
export declare class AbstractFactory {
    private static _instance;
    private static _gameModules;
    private _factories;
    static initialize(gameModules: IGameModules): void;
    static getInstance(): AbstractFactory;
    constructor();
    createGameSpecFactory(): IFactory<IGameSpec>;
}
