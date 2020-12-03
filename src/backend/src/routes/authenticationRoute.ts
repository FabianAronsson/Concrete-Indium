import AuthenticationRouteInterface from "./../interfaces/authenticationRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class AuthenticationRoute implements AuthenticationRouteInterface {
    authenticationRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", (req, res) => {
            // res.json(req.body);
            res.send("POST /authentication/");
        });
    
        return router;
    }
}

