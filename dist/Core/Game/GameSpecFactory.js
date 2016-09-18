"use strict";
var GameSpecFactory = (function () {
    function GameSpecFactory(gameModules) {
        this._gameModules = gameModules;
    }
    GameSpecFactory.prototype.create = function (gameType) {
        if (this._gameModules[gameType]) {
            var gameModule = require(this._gameModules[gameType].path + '/GameSpec');
            if (gameModule) {
                return gameModule;
            }
        }
    };
    return GameSpecFactory;
}());
exports.GameSpecFactory = GameSpecFactory;
