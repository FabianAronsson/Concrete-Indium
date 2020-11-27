"use strict";
exports.__esModule = true;
var AuthenticationModule = (function () {
    function AuthenticationModule() {
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
exports["default"] = AuthenticationModule;
//# sourceMappingURL=authenticationModule.js.map