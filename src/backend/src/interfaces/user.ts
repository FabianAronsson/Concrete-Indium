import * as bcrypt from "bcrypt";
import * as authModule from "./../modules/authenticationModule"

export default interface User {
    //identifiers
    id: string;
    username: string;
    email: string;

    //security
    passwordHash: string;

    //token
    tokenGeneration: string;
}

export function createUser(email: string, password: string, username: string): User {
    //gen token
    let tokenGeneration:string = ""; //random token generation, from authModule
    let id: string = ""; //random id
    let salt: string = bcrypt.genSalt(10); //salt
    let passwordHash: string = bcrypt.hash(password, salt); //hashed password

    let _user:User = 
    {
        id: id,
        username: username,
        email: email, 
        passwordHash: passwordHash, 
        tokenGeneration: tokenGeneration,
    }; 

    return _user;
    
}