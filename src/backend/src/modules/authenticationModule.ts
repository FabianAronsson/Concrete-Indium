import {storeInput, connect, dispose} from './../dBmodule';
import User from './../interfaces/user';
import * as jwt from "jsonwebtoken"; //error, no default export ???
const bcrypt = require('bcrypt')

export default class AuthenticationModule {

    /**
     *
     */
    constructor() {
        connect(); //TODO: inject instead and or add disposal
    }
    ///
    authenticateUser(token:string):boolean {

        var key = 'f6441bb8e8f656ad708ae43f355a0c8c59d2cef50567792286007ce410aa34ba999c974a293806485ebab9df15749146a419f2ffd824c888d2638e9caf313940'
        jwt.verify(token, key, {algorithms: ['RS256', /*other algorithms*/]}, function(err, decoded) {
            if(err){ //any error, expired or invalid or both
                return false;
            }
            else{
                return true;
            }
          });
          return false; // if for any reason, return false
    }

    authenticateUserWithPassword(email:string, password:string):boolean {
        try{
            /*let user = findOne(person in database)*/
            let user = ""; //dummy variable
            if(user){
                let isPasswordCorrect:boolean = bcrypt.compare(email, password)
                return isPasswordCorrect; 
            }
        }
        catch{ //error, password or email is incorrect
            console.log("Wrong password or email. Or user does not exist")
            return false;
        }
    }

    createToken(user:User):string {
        var signedToken = jwt.sign({ email: user.email },
        'f6441bb8e8f656ad708ae43f355a0c8c59d2cef50567792286007ce410aa34ba999c974a293806485ebab9df15749146a419f2ffd824c888d2638e9caf313940' ,
        { algorithm: 'RS256', expiresIn: '10m' } ) 
        return signedToken;
    }

    
}