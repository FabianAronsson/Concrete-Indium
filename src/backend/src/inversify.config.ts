import TYPES from "./types"
import { Container } from "inversify";

import UserRouteInterface from "./interfaces/userRoute"
import UserRoute from "./routes/userRoute";
import AuthenticationRouteInterface from "./interfaces/authenticationRoute"
import AuthenticationRoute from "./routes/authenticationRoute";


let container = new Container({ defaultScope: "Singleton" });

//container.bind<type>(TYPES.type).to(implimentation);
container.bind<UserRouteInterface>(TYPES.UserRoute).to(UserRoute);
container.bind<AuthenticationRouteInterface>(TYPES.AuthenticationRoute).to(AuthenticationRoute);

export default container;