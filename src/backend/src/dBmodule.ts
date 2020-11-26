import * as mongoose from "mongoose";

let db:mongoose.Connection = null;


export function connect(): void {
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function() : void{
        //PogChamp
        console.log("opened db connection");
    });
    db.on('close', () => {
        console.log("closed db connection");
    });
}

export function dispose(): void {
    if (db != null) {
        db.close();
    }
    
}


export function storeInput(input: any): void{
    input.save(() => {
        //console.log("save successful")
    });
};