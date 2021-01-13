import {storeInput, connect, dispose} from './../dBmodule';
import { injectable, inject } from "inversify";
import * as mongoose from "mongoose";
import User from './../interfaces/user';
import * as jwt from "jsonwebtoken";
import authenticationModule from '../interfaces/authenticationModule';
const bcrypt = require('bcrypt')

@injectable()
export default class AuthenticationModule implements authenticationModule{

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

    authenticateUserWithPassword(email:string, password:string):boolean {
        try{
            let user = findOne({}); //???? behöver schemat från usersModule.ts, men vet inte hur.
            if(user){
                let isPasswordCorrect:boolean = bcrypt.compare(password, user.passwordHash) //if user exists in DB then it will also have the corresponding hash
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