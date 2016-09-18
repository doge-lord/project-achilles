"use strict";
var ConcreteRoomActionFactory = (function () {
    function ConcreteRoomActionFactory() {
    }
    ConcreteRoomActionFactory.getInstance = function () {
        if (!ConcreteRoomActionFactory._instance) {
            ConcreteRoomActionFactory._instance = new ConcreteRoomActionFactory();
        }
        return ConcreteRoomActionFactory._instance;
    };
    ConcreteRoomActionFactory.prototype.create = function (room, actionType) {
        return;
    };
    return ConcreteRoomActionFactory;
}());
exports.RoomActionFactory = ConcreteRoomActionFactory.getInstance();
