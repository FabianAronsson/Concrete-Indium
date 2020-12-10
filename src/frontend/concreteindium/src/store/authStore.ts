import Vuex from 'vuex';

export interface IAuthenticationState {
    BearerToken: string,
    ExpirationTime: number
}

export const AuthenticationStore = {
    state: () => ({authState: AuthenticationStore}),
    mutations: {

    },
    actions: {

    },
    getters: {
        IsAuthenticated(state: ): boolean {
            return true;
        }
    }
}

