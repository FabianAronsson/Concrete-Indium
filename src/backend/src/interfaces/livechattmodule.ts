import Message from './message';


export default interface chattModule {
    NewchatMessage(username:string, timestamp:string, message:string): void;
    GetChatMessage(): Promise<Array<Message>>;
}
