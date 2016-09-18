export interface IFactory<T> {
    create(...args: any[]): T;
}

export interface IGameModules {
    [gameName: string]: {
        path: string;
    };
}

export interface IGameSpec {
    name: string;
    minPlayers: number;
    maxPlayers: number;
}

import { IGameModules } from '../Shared/Interfaces/IGameModules';
import { IGameSpec } from './IGameSpec';
import { IFactory } from '../Shared/Interfaces/IFactory';
export declare class GameSpecFactory implements IFactory<IGameSpec> {
    private _gameModules;
    constructor(gameModules: IGameModules);
    create(gameType: string): IGameSpec;
}

import { IFactory } from './Shared/Interfaces/IFactory';
import { IGameModules } from './Shared/Interfaces/IGameModules';
import { IGameSpec } from './Game/IGameSpec';
export declare class FactoryProducer {
    private static _instance;
    private static _gameModules;
    private _factories;
    static initialize(gameModules: IGameModules): void;
    static getInstance(): FactoryProducer;
    constructor();
    getGameSpecFactory(): IFactory<IGameSpec>;
}
export declare var FactoryProducerInstance: typeof FactoryProducer.getInstance;

export declare class User {
    private _id;
    private _name;
    constructor(id: number);
    id: number;
    name: string;
}

export declare class Game {
}

import { User } from '../User/User';
export declare class Room {
    private _id;
    private _host;
    private _users;
    private _gameSelected;
    private _game;
    private _gameSpecFactory;
    constructor(id: number, host: User, gameType: string);
}

import { User } from '../User/User';
export declare class Lobby {
    private _rooms;
    private _users;
    constructor();
    createRoom(hostId: number, gameType: string): void;
    userJoin(user: User): void;
    private generateRoomId();
}


import { IGameSpec } from '../@Core/Game/IGameSpec';
export declare const GameSpec: IGameSpec;

export interface IConnection<T> {
    connect(onMessageReceived: (t: T) => any): Promise<any>;
    sendData(t: T): any;
}

import { IConnection } from '../Shared/Interfaces/IConnection';
export declare class MockConnection implements IConnection<any> {
    connect(onMessageReceived: (t: any) => any): Promise<any>;
    sendData(t: any): any;
}

export interface IAction<T> {
    new (t: T, ...args: any[]): T;
    execute(): boolean;
}

export declare enum RoomActionType {
    CREATED = 0,
    SELECTED_GAME = 1,
    JOINED = 2,
    KICKED = 3,
    LEFT = 4,
    DESTROYED = 5,
    STARTED = 6,
    FINISHED = 7,
    ERROR = 8,
}

import { IFactory } from '../Shared/Interfaces/IFactory';
import { IAction } from '../Shared/Interfaces/IAction';
import { Room } from './Room';
export declare const RoomActionFactory: IFactory<IAction<Room>>;

export declare class Deferred<T> {
    private _promise;
    private _resolve;
    private _reject;
    constructor();
    promise: Promise<T>;
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

import { IAction } from './IAction';
export interface IActionInvoker<T> {
    execute(action: IAction<T>): void;
}
