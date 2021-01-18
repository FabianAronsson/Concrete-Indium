import * as mongoose from "mongoose";
import AuthenticationModule from "./authenticationModule";

var AuthModel = new AuthenticationModule;
AuthModel.authenticateUser;

const chatMessageSchema = new mongoose.Schema({
    username: String,
    timestamp: String,
    message: String,
})

const UserMessageModel = mongoose.model('MESSAGE', chatMessageSchema);

export function newchatMessage(username, timestamp, message): void {
    
    var userMessageModel = new UserMessageModel({
        username: username,
        timestamp: timestamp,
        message: message,
    })

    return userMessageModel;
}

export function getChatMessage(): string{
    let foundChatMessage = UserMessageModel.find({});
    return foundChatMessage;
}