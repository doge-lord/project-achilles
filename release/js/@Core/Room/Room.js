"use strict";
var FactoryProducer_1 = require('../FactoryProducer');
var Room = (function () {
    function Room(id, host, gameType) {
        this._gameSpecFactory = FactoryProducer_1.FactoryProducerInstance().getGameSpecFactory();
        this._id = id;
        this._host = host;
        this._users = [];
        this._users.push(host);
        this._gameSelected = this._gameSpecFactory.create(gameType);
    }
    return Room;
}());
exports.Room = Room;
