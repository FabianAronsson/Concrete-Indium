import {storeInput, connect, dispose} from './../dBmodule';
import User from './../interfaces/user';
import jwt from "jsonwebtoken"; //error, no default export ???

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
        var signedToken = jwt.sign({ email: user.email },
        'f6441bb8e8f656ad708ae43f355a0c8c59d2cef50567792286007ce410aa34ba999c974a293806485ebab9df15749146a419f2ffd824c888d2638e9caf313940' ,
        { algorithm: 'RS256', expiresIn: '10m' } ) 
        return signedToken;
    }

    
}