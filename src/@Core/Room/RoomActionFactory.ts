import {IFactory} from '../Shared/Interfaces/IFactory';
import {IAction} from '../Shared/Interfaces/IAction';
import {Room} from './Room';
import {RoomActionType} from './RoomActionType';

class ConcreteRoomActionFactory implements IFactory<IAction<Room>> {

    private static _instance: IFactory<IAction<Room>>

    public static getInstance(): IFactory<IAction<Room>> {
        if (!ConcreteRoomActionFactory._instance) {
            ConcreteRoomActionFactory._instance = new ConcreteRoomActionFactory();
        }

        return ConcreteRoomActionFactory._instance;
    }

    public create(room: Room, actionType: RoomActionType): IAction<Room> {
        return;
    }

} 

export const RoomActionFactory = ConcreteRoomActionFactory.getInstance();