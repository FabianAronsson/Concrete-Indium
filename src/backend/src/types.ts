import UserRoute from "./interfaces/userRoute";
import UserModule from "./interfaces/userModule"

let TYPES = {
    UserRoute: Symbol("UserRoute"),
    AuthenticationRoute: Symbol("AuthenticationRoute"),
    ChatRoute: Symbol("ChatRoute"),
    UserModule: Symbol("UserModule")
}

export default TYPES;
