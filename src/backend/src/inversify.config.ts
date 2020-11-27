import TYPES from "./types"
import { Container } from "inversify";

import UserRouteInterface from "./interfaces/userRoute"
import UserRoute from "./routes/userRoute";


let container = new Container({ defaultScope: "Singleton" });

//container.bind<type>(TYPES.type).to(implimentation);
container.bind<UserRouteInterface>(TYPES.UserRoute).to(UserRoute);

export default container;