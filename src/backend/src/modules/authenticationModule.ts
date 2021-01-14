import {storeInput, connect, dispose} from './../dBmodule';
import { injectable, inject } from "inversify";
import * as mongoose from "mongoose";
import User from './../interfaces/user';
import * as jwt from "jsonwebtoken";
import authenticationModule from '../interfaces/authenticationModule';
import * as bcrypt from 'bcrypt';
import types from '../types';
import userModule from '../interfaces/userModule';

@injectable()
export default class AuthenticationModule implements authenticationModule{

    private _userModule: userModule;

    public constructor(
      @inject(types.UserModule)userModule: userModule
    ) {
      this._userModule = userModule
    }


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
          return false; // if for any other reason, return false
    }

    async authenticateUserWithPassword(email:string, password:string):Promise<boolean>{
        try{
            let user = this._userModule.getUser(email);
            if(user){
                let isPasswordCorrect:boolean = await bcrypt.compare(password, user.passwordHash) //if user exists in DB then it will also have the corresponding hash
                return isPasswordCorrect; 
            }
        }
        catch{ //error, password or email is incorrect
            console.log("Wrong password or email, or user does not exist")
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
