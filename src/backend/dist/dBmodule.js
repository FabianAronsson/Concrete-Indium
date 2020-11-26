"use strict";
exports.__esModule = true;
exports.storeInput = void 0;
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
});
function storeInput(input) {
    input.save(function () {
    });
}
exports.storeInput = storeInput;
;
//# sourceMappingURL=dBmodule.js.map