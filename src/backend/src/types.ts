import UserRoute from "./interfaces/userRoute";
import UserModule from "./interfaces/userModule"
import AuthenticationModule from "./modules/authenticationModule";

let TYPES = {
    UserRoute: Symbol("UserRoute"),
    AuthenticationRoute: Symbol("AuthenticationRoute"),
    ChatRoute: Symbol("ChatRoute"),
    UserModule: Symbol("UserModule"),
    AuthenticationModule: Symbol("AuthenticationModule")
}

export default TYPES;
