import ChatRouteInterface from "./../interfaces/chatRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class ChatRoute implements ChatRouteInterface {
    chatRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", (req, res) => {
            // res.json(req.body);
            res.send("POST /chat/");
        });
    
        return router;
    }
}

