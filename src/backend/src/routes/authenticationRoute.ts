import AuthenticationRouteInterface from "./../interfaces/authenticationRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import authenticationModule from '../modules/authenticationModule';
import types from '../types';


@injectable()
export default class AuthenticationRoute implements AuthenticationRouteInterface {
    private _authenticationModule: authenticationModule;

    public constructor(
        @inject(types.AuthenticationModule) authenticationModule: authenticationModule
    ) {
        this._authenticationModule = authenticationModule;
    }
    
    authenticationRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", (req, res) => {
            // Authenticate user- import from autenticationModule
            this._authenticationModule.authenticateUser
            
            const email = req.body.email;
            const user = { name: email };

            const accessToken = this._authenticationModule.createToken;

            // Veryfing the token
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if (token == null) return res.sendStatus(401)
            this._authenticationModule.authenticateUserWithPassword
            
            res.json({ accessToken: accessToken });
        });
        return router;
    }

}

