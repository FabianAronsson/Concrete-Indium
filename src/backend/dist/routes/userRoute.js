"use strict";
exports.__esModule = true;
exports.userRoute = void 0;
var express = require("express");
function userRoute() {
    var router = express.Router();
    router.post("/", function (req, res) {
        res.send("POST /user/");
    });
    return router;
}
exports.userRoute = userRoute;
//# sourceMappingURL=userRoute.js.map