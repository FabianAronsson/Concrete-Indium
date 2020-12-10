import TYPES from "./types"
import { Container } from "inversify";

import UserRouteInterface from "./interfaces/userRoute"
import UserRoute from "./routes/userRoute";
import AuthenticationRouteInterface from "./interfaces/authenticationRoute"
import AuthenticationRoute from "./routes/authenticationRoute";
import ChatRouteInterface from "./interfaces/chatRoute"
import ChatRoute from "./routes/chatRoute";
import UserModuleInterface from "./interfaces/userModule"
import UserModule from "./modules/usersModule";


let container = new Container({ defaultScope: "Singleton" });

//container.bind<type>(TYPES.type).to(implimentation);
container.bind<UserRouteInterface>(TYPES.UserRoute).to(UserRoute);
container.bind<AuthenticationRouteInterface>(TYPES.AuthenticationRoute).to(AuthenticationRoute);
container.bind<ChatRouteInterface>(TYPES.ChatRoute).to(ChatRoute);
Container.bind<UserModuleInterface>(TYPES.UserModule).to(UserModule);

export default container;