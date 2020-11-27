"use strict";
exports.__esModule = true;
exports.createUser = void 0;
function createUser(email, password, username) {
    var tokenGeneration = "";
    var id = "";
    var salt = "";
    var passwordHash = "" + password;
    var _user = {
        id: id,
        username: username,
        email: email,
        passwordHash: passwordHash,
        tokenGeneration: tokenGeneration,
        salt: salt
    };
    return _user;
}
exports.createUser = createUser;
//# sourceMappingURL=user.js.map