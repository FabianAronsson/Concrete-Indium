import {storeInput} from './../dBmodule';
import user from './../interfaces/user';

export default class authenticationModule{

    authenticateUser(token:string):boolean{

        return false;
    }

    createToken(user:user):string{

        return "";
    }

    

}