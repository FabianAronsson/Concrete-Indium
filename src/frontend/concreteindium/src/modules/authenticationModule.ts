import axios from 'axios';

interface IAuthenticationModule {
    AuthenticateByPassword(store: any, email: string, passsword: string): Promise<boolean>,
}

export default class AuthenticationModule implements IAuthenticationModule {
    AuthenticateByPassword(store: any, email: string, passsword: string): Promise<boolean> {
        let result = axios({
            method: 'post',
            url: '',
            data: {

            },
            responseType: "json"
        }).then((result) => {

        });
    }
}