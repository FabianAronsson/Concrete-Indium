import {storeInput} from './../dBmodule';
import User from './../interfaces/user';

export default class AuthenticationModule{


    ///
    authenticateUser(token:string):boolean{

        return false;
    }


    ///
    createToken(user:User):string{

        return "";
    }


    ///
    getToken(user:User):string {

        return "";
    }

    

}