import * as mongoose from "mongoose";
import AuthenticationModule from "./authenticationModule";

const chatMessageSchema = new mongoose.Schema({
    username: String,
    timestamp: String,
    message: String,
})

const UserMessageModel = mongoose.model('MESSAGE', chatMessageSchema);

var AuthModel = new AuthenticationModule;
AuthModel.authenticateUser;

export function newchatMessage(username, timestamp, message): any {
    
    var userMessageModel = new UserMessageModel({
        username: username,
        timestamp: timestamp,
        message: message,
    })

    return userMessageModel;
}

export function getChatMessage(){
    let foundChatMessage = UserMessageModel.find({});
    return foundChatMessage;
}