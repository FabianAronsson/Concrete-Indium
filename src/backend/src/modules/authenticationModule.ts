import { injectable, inject } from "inversify";
import User from './../interfaces/user';
import * as jwt from "jsonwebtoken";
import authenticationModule from '../interfaces/authenticationModule';
import * as bcrypt from 'bcrypt';
import types from '../types';
import userModule from '../interfaces/userModule';

@injectable()
export default class AuthenticationModule implements authenticationModule {

    private _userModule: userModule;

    public constructor(
        @inject(types.UserModule) userModule: userModule
    ) {
        this._userModule = userModule
    }


    authenticateUser(token: string): boolean {
        jwt.verify(token, process.env.CLIENT_SECRET, { algorithms: ['RS256', /*other algorithms*/] }, function (err, decoded) {
            if (err) { //any error, expired or invalid or both
                return false;
            }
            else {
                return true;
            }
        });
        return false; // if for any other reason, return false
    }

    async authenticateUserWithPassword(email: string, password: string): Promise<boolean> {
        try {
            let user = await this._userModule.getUser(email);
            if (user) {
                let isPasswordCorrect: boolean = await bcrypt.compare(password, user.passwordHash) //if user exists in DB then it will also have the corresponding hash
                return isPasswordCorrect;
            }
        }
        catch { //error, password or email is incorrect
            console.log("Wrong password or email, or user does not exist")
            return false;
        }
    }

    createToken(user: User): string {
        var signedToken = jwt.sign({ email: user.email },
            process.env.CLIENT_SECRET,
            { algorithm: 'RS256', expiresIn: '10m' })
        return signedToken;
    }
}
