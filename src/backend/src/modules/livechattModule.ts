import * as mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    username: String,
    timestamp: String,
    message: String,
})

const UserData = mongoose.model('MESSAGE', chatMessageSchema);


export function newchatMessage(username, timestamp, message): string {
    
    var userData = new UserData({
        username: username,
        timestamp: timestamp,
        message: message,
    })

    return userData;
}