"use strict";
var GameSpecFactory_1 = require('./Game/GameSpecFactory');
var FactoryProducer = (function () {
    function FactoryProducer() {
        this._factories = new Map();
    }
    FactoryProducer.initialize = function (gameModules) {
        FactoryProducer._gameModules = gameModules;
    };
    FactoryProducer.getInstance = function () {
        if (!FactoryProducer._instance) {
            FactoryProducer._instance = new FactoryProducer();
        }
        return FactoryProducer._instance;
    };
    FactoryProducer.prototype.getGameSpecFactory = function () {
        if (FactoryProducer._gameModules) {
            if (!this._factories.get('GameSpec')) {
                this._factories.set('GameSpec', new GameSpecFactory_1.GameSpecFactory(FactoryProducer._gameModules));
            }
            return this._factories.get('GameSpec');
        }
    };
    return FactoryProducer;
}());
exports.FactoryProducer = FactoryProducer;
exports.FactoryProducerInstance = FactoryProducer.getInstance;
