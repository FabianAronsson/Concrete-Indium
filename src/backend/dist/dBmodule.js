"use strict";
exports.__esModule = true;
exports.storeInput = exports.connect = void 0;
var mongoose = require("mongoose");
var db;
function connect() {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function () {
    });
}
exports.connect = connect;
function storeInput(input) {
    input.save(function () {
    });
}
exports.storeInput = storeInput;
;
//# sourceMappingURL=dBmodule.js.map