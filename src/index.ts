import {FactoryProducer, FactoryProducerInstance} from './@Core/FactoryProducer';
import {User} from './@Core/User/User';
import {Lobby} from './@Core/Lobby/Lobby';

// Mock games.json
var gamesJson: any = {
    "RockPaperScissors": {
        "path": "../../RockPaperScissors"
    }
}

FactoryProducer.initialize(gamesJson);


// Test
var lobby: Lobby = new Lobby();

var user: User = new User(Date.now());
user.name = 'AllahuAkbar';

lobby.userJoin(user);
lobby.userJoin(user);
lobby.userJoin(user);
lobby.createRoom(user.id, "RockPaperScissors");

