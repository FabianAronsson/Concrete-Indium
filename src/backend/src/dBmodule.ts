import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() : void{
    //PogChamp
});


export function storeInput(input: any){
    input.save(() => {
        //console.log("save successful")
    });
};