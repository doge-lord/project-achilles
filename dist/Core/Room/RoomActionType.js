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
