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
var DbModule = (function () {
    function DbModule() {
    }
    DbModule.prototype.connect = function () {
        mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
        this._db = mongoose.connection;
        this._db.on('error', console.error.bind(console, 'connection error:'));
        this._db.on('open', function () {
            console.log("opened db connection");
        });
        this._db.on('close', function () {
            console.log("closed db connection");
        });
    };
    DbModule.prototype.dispose = function () {
        if (this._db != null) {
            this._db.close();
            this._db == null;
        }
    };
    DbModule.prototype.isConnected = function () {
        return this._db != null;
    };
    DbModule.prototype.storeInput = function (input) {
        input.save(function () {
        });
    };
    ;
    DbModule = __decorate([
        inversify_1.injectable()
    ], DbModule);
    return DbModule;
}());
exports.default = DbModule;
//# sourceMappingURL=dBmodule.js.map