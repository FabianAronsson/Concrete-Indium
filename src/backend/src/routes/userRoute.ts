import UserRouteInterface from "./../interfaces/userRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserRoute implements UserRouteInterface {
    userRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", (req, res) => {
            // res.json(req.body);
            res.send("POST /user/");
        });
    
        return router;
    }
}

