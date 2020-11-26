import * as express from "express";

export function userRoute(): express.Router {
    let router = express.Router();

    router.post("/", (req, res) => {
        // res.json(req.body);
        res.send("POST /user/");
    });

    return router;
}

