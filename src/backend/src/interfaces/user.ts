import * as bcrypt from "bcrypt";
import * as uuid from "uuid";

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

export async function createUser(email: string, password: string, username: string): Promise<User> {
    //gen token
    let tokenGeneration:string = ""; //random token generation, from authModule
    const v4options = 
    {
        random: [
            Math.floor(Math.random() * Math.floor(255))
        ],
    };
    let id: string = uuid.v4(v4options); //random id
    let salt: string = await bcrypt.genSalt(10); //salt
    let passwordHash: string = await bcrypt.hash(password, salt); //hashed password

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
