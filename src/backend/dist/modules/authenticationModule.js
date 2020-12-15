"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dBmodule_1 = require("./../dBmodule");
var AuthenticationModule = (function () {
    function AuthenticationModule() {
        dBmodule_1.connect();
    }
    AuthenticationModule.prototype.authenticateUser = function (token) {
        return false;
    };
    AuthenticationModule.prototype.authenticateUserWithPassword = function (email, password) {
        return false;
    };
    AuthenticationModule.prototype.createToken = function (user) {
        return "";
    };
    return AuthenticationModule;
}());
exports.default = AuthenticationModule;
//# sourceMappingURL=authenticationModule.js.map