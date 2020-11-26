import * as express from "express";
import { userRoute } from "./routes/userRoute"


let app: express.Application = express();

let port: number = 3333;

app.get("/", (req , res) =>{
    res.send("test");
});

app.use("/user", userRoute());

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});