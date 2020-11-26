

export default interface User {
    email: string;
    passwordHash: string;
    salt: string;

    tokenGeneration: string;
}

export function createUser(email: string, password: string): User {
    //gen token
    let _token:string = "";
    
    let _user:User = {email: email, 
        passwordHash: password, 
        tokenGeneration: _token,
        salt: null }; // TODO; FIX SALT


    return _user;
}