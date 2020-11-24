System.register(["express"], function (exports_1, context_1) {
    "use strict";
    var express, port;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            }
        ],
        execute: function () {
            port = 3333;
            express.application.listen(port, function () {
                console.log('listening on port ${port}');
            });
        }
    };
});
//# sourceMappingURL=server.js.map