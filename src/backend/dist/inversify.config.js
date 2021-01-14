"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var inversify_1 = require("inversify");
var userRoute_1 = require("./routes/userRoute");
var authenticationRoute_1 = require("./routes/authenticationRoute");
var chatRoute_1 = require("./routes/chatRoute");
var container = new inversify_1.Container({ defaultScope: "Singleton" });
container.bind(types_1.default.UserRoute).to(userRoute_1.default);
container.bind(types_1.default.AuthenticationRoute).to(authenticationRoute_1.default);
container.bind(types_1.default.ChatRoute).to(chatRoute_1.default);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map