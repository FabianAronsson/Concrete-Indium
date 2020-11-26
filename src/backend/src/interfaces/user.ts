

export default interface User{
    email: string;
    passwordHash: string;

    token: string;
}

export function createUser(email: string, password: string): User {
    //gen token
    let _token:string = "";
    
    let _user:User;

    return _user;
}