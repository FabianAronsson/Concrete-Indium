import ChatRouteInterface from "./../interfaces/chatRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import lCModule from "../interfaces/livechattmodule";
import authModule from "../interfaces/authenticationModule";
import types from '../types';

@injectable()
export default class ChatRoute implements ChatRouteInterface {
    
    constructor(@inject(types.LiveChatModule) chatModule: lCModule, @inject(types.AuthenticationModule) authMod : authModule){
        this._chatModule = chatModule;
        this._authMod = authMod;
    }
    
    private _chatModule : lCModule;
    private _authMod : authModule;
    
    public chatRoute(): express.Router {


        let router = express.Router();
    

        router.post("/chat", async (req : express.Request, res : express.Response) => {

            let authResult = this._authMod.authenticateUser;
            if(authResult)
            {
                await this._chatModule.NewchatMessage(req.body.username, req.body.timestamp, req.body.message);
            }

            else
            {
                //HTTP Response 401
                return express.response.status(401);            
            }
            res.send("POST /chat/");
        });
    
        return router;
    }


}



