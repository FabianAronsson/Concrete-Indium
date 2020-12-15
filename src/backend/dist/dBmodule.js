"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeInput = exports.dispose = exports.connect = void 0;
var mongoose = require("mongoose");
var db = null;
function connect() {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function () {
        console.log("opened db connection");
    });
    db.on('close', function () {
        console.log("closed db connection");
    });
}
exports.connect = connect;
function dispose() {
    if (db != null) {
        db.close();
    }
}
exports.dispose = dispose;
function storeInput(input) {
    input.save(function () {
    });
}
exports.storeInput = storeInput;
;
//# sourceMappingURL=dBmodule.js.map