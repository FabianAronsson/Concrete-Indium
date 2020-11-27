"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var userRoute = inversify_config_1.default.get(types_1.default.UserRoute).userRoute();
var app = express();
var port = 3333;
app.get("/", function (req, res) {
    res.send("test");
});
app.use("/user", userRoute);
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map