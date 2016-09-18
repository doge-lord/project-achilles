import {IFactory} from './Shared/Interfaces/IFactory';
import {IGameModules} from './Shared/Interfaces/IGameModules';
import {IGameSpec} from './Game/IGameSpec';
import {GameSpecFactory} from './Game/GameSpecFactory';

export class FactoryProducer {

    private static _instance: FactoryProducer;

    private static _gameModules: IGameModules;

    private _factories: Map<string, IFactory<any>>;

    /**
     * Sets the IGameModules object where the list of GameModules are listed.
     * 
     * @static
     * @param {IGameModules} gameModules
     * 
     * @memberOf FactoryProducer
     */
    public static initialize(gameModules: IGameModules) {
        FactoryProducer._gameModules = gameModules;
    }

    /**
     * Returns the singleton instance of the FactoryProducer class.
     * 
     * @static
     * @returns {FactoryProducer}
     * 
     * @memberOf FactoryProducer
     */
    public static getInstance(): FactoryProducer {
        if (!FactoryProducer._instance) {
            FactoryProducer._instance = new FactoryProducer();
        }

        return FactoryProducer._instance;
    }

    /**
     * Creates an instance of FactoryProducer.
     * 
     * @memberOf FactoryProducer
     */
    constructor() {
        this._factories = new Map<string, IFactory<any>>();
    }

    /**
     * Returns a singleton instance of GameSpecFactory.
     * 
     * @returns {IFactory<IGameSpec>}
     * 
     * @memberOf FactoryProducer
     */
    public getGameSpecFactory(): IFactory<IGameSpec> {
        if (FactoryProducer._gameModules) {
            if (!this._factories.get('GameSpec')) {
                this._factories.set('GameSpec', new GameSpecFactory(FactoryProducer._gameModules))
            }

            return this._factories.get('GameSpec');
        }
    }

}

export var FactoryProducerInstance = FactoryProducer.getInstance;