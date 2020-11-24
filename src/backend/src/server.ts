import * as express from "express";
let app: express.Application = express();

let port: number = 3333;

app.get("/", (req , res) =>{
    res.send("test");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});