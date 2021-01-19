import AuthenticationStateInterface from '../../interfaces/iAuthenticationState';

export default class AuthenticationState implements AuthenticationStateInterface {
    BearerToken: string;
    ExpirationTime: number;
  
    /**
     *
     */
    constructor() {
      this.BearerToken = '';
      this.ExpirationTime = 0;
    }
  
  }