"use strict";
exports.__esModule = true;
var express = require("express");
var app = express.application;
var port = 3333;
app.get("/", function (req, res) {
    res.send("test");
});
app.listen(port, function () {
    console.log('listening on port ${port}');
});
//# sourceMappingURL=server.js.map