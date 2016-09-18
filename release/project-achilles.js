"use strict";

"use strict";

"use strict";

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

"use strict";
var User = (function () {
    function User(id) {
        this._id = id;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;

"use strict";
var Game = (function () {
    function Game() {
    }
    return Game;
}());
exports.Game = Game;

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

"use strict";
exports.GameSpec = {
    name: "RockPaperScissors",
    minPlayers: 2,
    maxPlayers: 2
};

"use strict";

"use strict";
var MockConnection = (function () {
    function MockConnection() {
    }
    MockConnection.prototype.connect = function (onMessageReceived) {
        return;
    };
    MockConnection.prototype.sendData = function (t) {
        return;
    };
    return MockConnection;
}());
exports.MockConnection = MockConnection;

"use strict";

"use strict";
(function (RoomActionType) {
    RoomActionType[RoomActionType["CREATED"] = 0] = "CREATED";
    RoomActionType[RoomActionType["SELECTED_GAME"] = 1] = "SELECTED_GAME";
    RoomActionType[RoomActionType["JOINED"] = 2] = "JOINED";
    RoomActionType[RoomActionType["KICKED"] = 3] = "KICKED";
    RoomActionType[RoomActionType["LEFT"] = 4] = "LEFT";
    RoomActionType[RoomActionType["DESTROYED"] = 5] = "DESTROYED";
    RoomActionType[RoomActionType["STARTED"] = 6] = "STARTED";
    RoomActionType[RoomActionType["FINISHED"] = 7] = "FINISHED";
    RoomActionType[RoomActionType["ERROR"] = 8] = "ERROR";
})(exports.RoomActionType || (exports.RoomActionType = {}));
var RoomActionType = exports.RoomActionType;

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

"use strict";
var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
    }
    Object.defineProperty(Deferred.prototype, "promise", {
        get: function () {
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "resolve", {
        get: function () {
            return this._resolve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "reject", {
        get: function () {
            return this._reject;
        },
        enumerable: true,
        configurable: true
    });
    return Deferred;
}());
exports.Deferred = Deferred;

"use strict";
