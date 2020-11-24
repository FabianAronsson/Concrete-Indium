import * as express from "express";
let app = express.application;

let port: number = 3333;



app.listen(port, () => {
    console.log('listening on port ${port}');
});