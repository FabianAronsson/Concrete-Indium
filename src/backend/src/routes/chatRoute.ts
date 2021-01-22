import ChatRouteInterface from "./../interfaces/chatRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import lCModule from "../interfaces/livechattmodule";
import types from '../types';

@injectable()
export default class ChatRoute implements ChatRouteInterface {
    
    constructor(@inject(types.LiveChatModule) chatModule: lCModule){
        this._chatModule = chatModule;
    }
    
    private _chatModule : lCModule;

    public chatRoute(): express.Router {


        let router = express.Router();
    

        router.post("/chat", (req, res) => {
            

            // res.json(req.body);
            res.send("POST /chat/");
        });
    
        return router;
    }


}



