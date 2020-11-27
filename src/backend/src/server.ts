import * as express from "express";
import UserRoute from "./interfaces/userRoute";
import container from "./inversify.config";
import conatiner from "./inversify.config";
import TYPES from "./types";


var userRoute = container.get<UserRoute>(TYPES.UserRoute).userRoute();


let app: express.Application = express();

let port: number = 3333;

app.get("/", (req , res) =>{
    res.send("test");
});

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});