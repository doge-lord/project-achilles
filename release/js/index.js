"use strict";
var FactoryProducer_1 = require('./@Core/FactoryProducer');
var User_1 = require('./@Core/User/User');
var Lobby_1 = require('./@Core/Lobby/Lobby');
var gamesJson = {
    "RockPaperScissors": {
        "path": "../../RockPaperScissors"
    }
};
FactoryProducer_1.FactoryProducer.initialize(gamesJson);
var lobby = new Lobby_1.Lobby();
var user = new User_1.User(Date.now());
user.name = 'AllahuAkbar';
lobby.userJoin(user);
lobby.userJoin(user);
lobby.userJoin(user);
lobby.createRoom(user.id, "RockPaperScissors");
