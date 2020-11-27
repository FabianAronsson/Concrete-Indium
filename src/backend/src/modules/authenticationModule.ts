import {storeInput, connect, dispose} from './../dBmodule';
import User from './../interfaces/user';

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

        return "";
    }

}