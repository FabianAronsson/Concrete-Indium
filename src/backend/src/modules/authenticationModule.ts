import {storeInput, connect, dispose} from './../dBmodule';
import User from './../interfaces/user';
import jwt from "jsonwebtoken";

export default class AuthenticationModule {

    /**
     *
     */
    constructor() {
        connect(); //TODO: inject instead and or add disposal
    }
    ///
    authenticateUser(token:string):boolean {

        return false;
    }

    authenticateUserWithPassword(email:string, password:string):boolean {

        return false;
    }

    ///
    createToken(user:User):string {
        var TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex');
        var token = jwt.sign({ email: user.email }, TOKEN_SECRET, {expiresIn: '10m'} ) 
        return token;
    }

    
}