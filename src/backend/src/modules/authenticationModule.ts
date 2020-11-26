import {storeInput} from './../dBmodule';
import User from './../interfaces/user';

export default class AuthenticationModule {


    ///
    authenticateUser(token:string):boolean {

        return false;
    }

    authenticateUserWithPassword(email:string, password:string):boolean {

        return false;
    }

    ///
    createToken(user:User):string {

        return "";
    }

}