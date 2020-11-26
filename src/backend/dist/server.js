"use strict";
exports.__esModule = true;
var express = require("express");
var userRoute_1 = require("./routes/userRoute");
var app = express();
var port = 3333;
app.get("/", function (req, res) {
    res.send("test");
});
app.use("/user", userRoute_1.userRoute());
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map