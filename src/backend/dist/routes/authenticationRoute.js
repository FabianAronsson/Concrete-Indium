"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var inversify_1 = require("inversify");
require("reflect-metadata");
var AuthenticationRoute = (function () {
    function AuthenticationRoute() {
    }
    AuthenticationRoute.prototype.userRoute = function () {
        var router = express.Router();
        router.post("/", function (req, res) {
            res.send("POST /authentication/");
        });
        return router;
    };
    AuthenticationRoute = __decorate([
        inversify_1.injectable()
    ], AuthenticationRoute);
    return AuthenticationRoute;
}());
exports.default = AuthenticationRoute;
//# sourceMappingURL=authenticationRoute.js.map