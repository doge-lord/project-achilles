import { IFactory } from './Shared/Interfaces/IFactory';
import { IGameModules } from './Shared/Interfaces/IGameModules';
import { IGameSpec } from './Game/IGameSpec';
export declare class FactoryProducer {
    private static _instance;
    private static _gameModules;
    private _factories;
    static initialize(gameModules: IGameModules): void;
    static getInstance(): FactoryProducer;
    constructor();
    getGameSpecFactory(): IFactory<IGameSpec>;
}
export declare var FactoryProducerInstance: typeof FactoryProducer.getInstance;
