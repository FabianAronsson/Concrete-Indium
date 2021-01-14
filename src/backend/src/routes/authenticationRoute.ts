require('dotenv').config()

import AuthenticationRouteInterface from "./../interfaces/authenticationRoute";
import * as express from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";

@injectable()
export default class AuthenticationRoute implements AuthenticationRouteInterface {
    authenticationRoute(): express.Router {
        let router = express.Router();
    
        router.post("/", (req, res) => {
            // res.json(req.body);

            // Authenticate user- import from autenticationModule

            // Import createToken from authenticationModule for create the token

            const username = req.body.username;
            const user = { name: username };

            const accessToken = /*Import createToken from authenticationModule for create the token*/;
            res.json({ accessToken: accessToken });
        });
        return router;
    }

    authenticateToken(req: any, res: any, next: any){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        // Verify the token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    }
}

