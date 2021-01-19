import * as mongoose from "mongoose";
import Message from '../interfaces/message';
import dbModule from '../interfaces/dbmodule';
import types from '../types';
import {injectable, inject} from 'inversify';
import IChatModule from '../interfaces/livechattmodule';


@injectable()
export default class ChattModule implements IChatModule {
  

  private _dbModule :  dbModule;

  private chatMessageSchema = new mongoose.Schema({
    username: String,
    timestamp: String,
    message: String,
  });

  private UserMessageModel = mongoose.model('MESSAGE', this.chatMessageSchema);


  public constructor (@inject(types.DbModule) dbmodule: dbModule) {
    this._dbModule = dbmodule;
    //inject authenticationModule
  } 

    NewchatMessage(username:string, timestamp:string, message:string): void {
    
      var userMessageModel = new this.UserMessageModel({
        username: username,
        timestamp: timestamp,
        message: message,
      });

      this._dbModule.storeInput(userMessageModel);
}

    async GetChatMessage(): Promise<Array<Message>>{
      await this.UserMessageModel.find({}, (error, result) => {
	if (error != null) 
	  {return new Array<Message>();}
	return <Array<Message>>(<unknown>result);
      });

      return new Array<Message>();
    }
}


