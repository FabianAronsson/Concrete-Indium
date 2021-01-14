"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var inversify_1 = require("inversify");
require("reflect-metadata");
var userSchema = new mongoose.Schema({
    id: String,
    username: String,
    email: String,
    passwordHash: String,
    salt: String,
    tokenGeneration: String
});
var User = mongoose.model('Person', userSchema);
var UserModule = (function () {
    function UserModule() {
    }
    UserModule.prototype.createUser = function (username, email, password) {
        var newUser = new User({
            username: username,
            email: email,
            password: password
        });
    };
    UserModule.prototype.getUser = function (email) {
        var user = User.findOne({ email: email });
        return user;
    };
    ;
    UserModule = __decorate([
        inversify_1.injectable()
    ], UserModule);
    return UserModule;
}());
exports.default = UserModule;
//# sourceMappingURL=usersModule.js.map