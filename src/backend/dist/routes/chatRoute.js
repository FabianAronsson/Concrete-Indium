"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("../types");
var ChatRoute = (function () {
    function ChatRoute(chatModule) {
        this._chatModule = chatModule;
    }
    ChatRoute.prototype.chatRoute = function () {
        var router = express.Router();
        router.post("/chat", function (req, res) {
        }, private, _message, this._chatModule.NewchatMessage(req.body.username, req.body.timestamp, req.body.message));
        res.send("POST /chat/");
    };
    ;
    ChatRoute = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.LiveChatModule)),
        __metadata("design:paramtypes", [Object])
    ], ChatRoute);
    return ChatRoute;
}());
exports.default = ChatRoute;
return router;
//# sourceMappingURL=chatRoute.js.map