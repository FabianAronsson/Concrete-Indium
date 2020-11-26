import * as mongoose from "mongoose";

let db:mongoose.Connection = null;


export function connect() {
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function() : void{
        //PogChamp
    });
}


export function storeInput(input: any){
    input.save(() => {
        //console.log("save successful")
    });
};