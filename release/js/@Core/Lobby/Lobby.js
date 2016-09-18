"use strict";
var _ = require('lodash');
var Room_1 = require('../Room/Room');
var Lobby = (function () {
    function Lobby() {
        this._rooms = [];
        this._users = [];
    }
    Lobby.prototype.createRoom = function (hostId, gameType) {
        var host = _.find(this._users, function (user) { return hostId === user.id; });
        this._rooms.push(new Room_1.Room(this.generateRoomId(), host, gameType));
    };
    Lobby.prototype.userJoin = function (user) {
        if (!_.includes(this._users, user)) {
            this._users.push(user);
        }
    };
    Lobby.prototype.generateRoomId = function () {
        return Date.now();
    };
    return Lobby;
}());
exports.Lobby = Lobby;
