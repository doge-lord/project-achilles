"use strict";
var GameSpecFactory_1 = require('./Game/GameSpecFactory');
var AbstractFactory = (function () {
    function AbstractFactory() {
        this._factories = new Map();
    }
    AbstractFactory.initialize = function (gameModules) {
        AbstractFactory._gameModules = gameModules;
    };
    AbstractFactory.getInstance = function () {
        if (!AbstractFactory._instance) {
            AbstractFactory._instance = new AbstractFactory();
        }
        return AbstractFactory._instance;
    };
    AbstractFactory.prototype.createGameSpecFactory = function () {
        if (AbstractFactory._gameModules) {
            if (!this._factories.get('GameSpec')) {
                this._factories.set('GameSpec', new GameSpecFactory_1.GameSpecFactory(AbstractFactory._gameModules));
            }
            return this._factories.get('GameSpec');
        }
        return;
    };
    return AbstractFactory;
}());
exports.AbstractFactory = AbstractFactory;
