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
