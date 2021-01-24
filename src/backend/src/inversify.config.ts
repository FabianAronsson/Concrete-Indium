import TYPES from "./types"
import { Container } from "inversify";

import UserRouteInterface from "./interfaces/userRoute"
import UserRoute from "./routes/userRoute";

import AuthenticationRouteInterface from "./interfaces/authenticationRoute"
import AuthenticationRoute from "./routes/authenticationRoute";

import ChatRouteInterface from "./interfaces/chatRoute"
import ChatRoute from "./routes/chatRoute";

import DbModule from "./dBmodule";
import IDbModule from "./interfaces/dbmodule";

import LiveChatModule from "./modules/livechattModule";
import ILiveChatModule from "./interfaces/livechattmodule";

import AuthenticationModule from "./modules/authenticationModule";
import AuthenticationModuleInterface from "./interfaces/authenticationModule";

import UserModule from "./modules/usersModule";
import UserModuleInterface from "./interfaces/userModule";



let container:Container = new Container({ defaultScope: "Singleton" });

//container.bind<type>(TYPES.type).to(implimentation);
container.bind<UserRouteInterface>(TYPES.UserRoute).to(UserRoute);
container.bind<AuthenticationRouteInterface>(TYPES.AuthenticationRoute).to(AuthenticationRoute);
container.bind<ChatRouteInterface>(TYPES.ChatRoute).to(ChatRoute);
container.bind<IDbModule>(TYPES.DbModule).to(DbModule);
container.bind<ILiveChatModule>(TYPES.LiveChatModule).to(LiveChatModule);
container.bind<AuthenticationModuleInterface>(TYPES.AuthenticationModule).to(AuthenticationModule);
container.bind<UserModuleInterface>(TYPES.UserModule).to(UserModule);

export default container;
