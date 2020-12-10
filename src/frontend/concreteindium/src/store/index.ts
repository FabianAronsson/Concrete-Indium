import Vue from 'vue'
import Vuex from 'vuex'

import { DateTime } from 'luxon';

import AuthenticationState from './models/authenticationState';

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    authenticationState: new AuthenticationState
  },
  mutations: {
    Authenticate(state, token: string, expiration?: number): void{
      
      let authState = new AuthenticationState;
      authState.BearerToken = token;
      if (expiration != null)
        authState.ExpirationTime = expiration;

      state.authenticationState = authState;
    }
  },
  actions: {
  },
  getters: {
    IsAuthenticated(state) {
      if (DateTime.fromSeconds(state.authenticationState.ExpirationTime) <= DateTime.utc())
        return false;

      if (state.authenticationState.BearerToken === '' || state.authenticationState.BearerToken == null)
        return false;

      return true;
    },
    GetBearerToken(state): string {
      return state.authenticationState.BearerToken;
    }
  }
});
