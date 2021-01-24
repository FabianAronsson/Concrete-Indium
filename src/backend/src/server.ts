import * as express from "express";
import UserRoute from "./interfaces/userRoute";
import AuthenticationRoute from "./interfaces/authenticationRoute";
import ChatRoute from "./interfaces/chatRoute";
import container from "./inversify.config";
import DbModule from "./interfaces/dbmodule";
import TYPES from "./types";



var userRoute = container.get<UserRoute>(TYPES.UserRoute).userRoute();
var authRoute = container.get<AuthenticationRoute>(TYPES.AuthenticationRoute).authenticationRoute();
var chatRoute = container.get<ChatRoute >(TYPES.ChatRoute).chatRoute();

//Needed for db functionality but does not run
//var db = container.get<DbModule>(TYPES.DbModule);
//db.connect();

let app: express.Application = express();

let port: number = 3333;

app.get("/", (req, res) =>{
    res.send("test");
});

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/chat", chatRoute);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
