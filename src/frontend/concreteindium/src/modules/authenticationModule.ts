import axios from 'axios';
import IAuthenticationResponse from '../interfaces/AuthenticationResponse';

interface IAuthenticationModule {
    AuthenticateByPassword(store: any, email: string, passsword: string): boolean,
}

export default class AuthenticationModule implements IAuthenticationModule {
    AuthenticateByPassword(store: any, email: string, password: string): boolean {
        axios({
            method: 'post',
            url: '',
            data: {
		email: email,
		password: password
            },
            responseType: "json"
        }).then((result) => {
            //parse json
		if (result.status != 200)
			return false;

		let data: IAuthenticationResponse = JSON.parse(result.data);

            //verify
		if (data.token == null || data.token === '')
			return false;
		
            //add to store
		store.dispatch('authenticate', data);

            //etc
		return true;
        });
	return false;
    }
}
