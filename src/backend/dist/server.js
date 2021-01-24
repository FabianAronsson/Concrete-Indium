"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var userRoute = inversify_config_1.default.get(types_1.default.UserRoute).userRoute();
var authRoute = inversify_config_1.default.get(types_1.default.AuthenticationRoute).authenticationRoute();
var chatRoute = inversify_config_1.default.get(types_1.default.ChatRoute).chatRoute();
var app = express();
var port = 3333;
app.get("/", function (req, res) {
    res.send("test");
});
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/chat", chatRoute);
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map