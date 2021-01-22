import AuthenticationRouteInterface from "./../interfaces/authenticationRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import authenticationModule from '../modules/authenticationModule';
import types from '../types';
import userModule from '../interfaces/userModule';
import UserModule from "../modules/usersModule";


@injectable()
export default class AuthenticationRoute implements AuthenticationRouteInterface {
    private _authenticationModule: authenticationModule;
    private _userModule: userModule;

    public constructor(
        @inject(types.AuthenticationModule) authenticationModule: authenticationModule,
        @inject(types.UserModule)userModule: userModule
    ) {
        this._authenticationModule = authenticationModule;
        this._userModule = userModule

    }

    
    
    authenticationRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", async (req, res) => {
            // hämta användarnamn / lösenord
            const email = req.body.email;

            // hämta en kopia av användaren som dem representerar
            let user = await this._userModule.getUser(email);
            
            // kolla att dem existerar(ifall inte retunera ett felmendellande)
            if (await this._authenticationModule.authenticateUserWithPassword(email, req.body.password)) {
            // skapa en token med den användaren
                const accessToken = this._authenticationModule.createToken(user);
            // retunera resultatet
                res.json({ accessToken: accessToken });
            } else {
                res.sendStatus(401);
            }
        });
        return router;
    }


}

