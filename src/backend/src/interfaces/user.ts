import * as bcrypt from "bcrypt";

export default interface User {
    //identifiers
    id: string;
    username: string;
    email: string;

    //security
    passwordHash: string;
    salt: string;

    tokenGeneration: string;
}

export function createUser(email: string, password: string, username: string): User {
    //gen token
    let tokenGeneration:string = ""; //random token generation
    let id: string = ""; //random id
    let salt: string = ""; //salt
    let passwordHash: string = "" + password;

    let _user:User = 
    {
        id: id,
        username: username,
        email: email, 
        passwordHash: passwordHash, 
        tokenGeneration: tokenGeneration,
        salt: salt 
    }; // TODO; FIX SALT

    return _user;
    
}