import * as chatDefinitions from '../interfaces/chattingModule';
import axios from 'axios';


export default class ChattingModule implements chatDefinitions.default {
  public updateChatCallback: (message: chatDefinitions.IMessage[]) => void;
  public chatOptions: chatDefinitions.IChatOptions; 

  private static baseurl: ""; 
  private static getchat: '${baseurl}';
  private static sendMessage: '${baseurl}';
 
  private _timer: number = 0;

  constructor(callback: (message: chatDefinitions.IMessage[]) => void, options: chatDefinitions.IChatOptions) {
    this.updateChatCallback = callback;
    this.chatOptions = options;
  }


  public async Connect(): Promise<chatDefinitions.IChatConnectionResult>{
    let timer = setInterval(async () => {
      await this.UpdateChat();
    }, this.chatOptions.interval)
    this._timer = timer;

    

    return new ChatConnectionResult(); 
  }

  
  public async SendMessage(message: chatDefinitions.IMessage): Promise<void> {
    var json = JSON.stringify(message);

    await axios({
      url: ChattingModule.sendMessage,
      method: "POST",
      headers: 'Bearer ${this.chatOptions.authenticationToken}',
      responseType: "json"
      });
  }

  CloseConnection(): void {
    clearInterval(this._timer);
  }

  private async UpdateChat(): Promise<void> {
    let json = await this.GetUpdates();
    let message = this.MessageFromJson(json);

    this.updateChatCallback(message);
  }
  

  private MessageFromJson(json: string): chatDefinitions.IMessage[] {
    if (json != null || json !== '')
    return <chatDefinitions.IMessage[]>JSON.parse(json);

    return new Array<chatDefinitions.IMessage>();
  }

  private async GetUpdates(): Promise<string >{
    await axios({
      url: ChattingModule.getchat, 
      method: "GET",
      headers: {
	aut: 'Bearer ${this.chatOptions.authenticationToken}'
      },
      responseType: "json"
    }).then((response) => {
      if (response.status != 200)
	return "";

      return response.data;
    });
    
    return ""; //defaulting
  }


  private PushUpdates(update: chatDefinitions.IMessage[]): void {
   this.updateChatCallback(update); 
  }

}

//----------------------------data interfaces definitions-----------------------------
class ChatConnectionResult implements chatDefinitions.IChatConnectionResult {
  public ConnectionSucessfull: boolean;

  constructor(result?: boolean) {
    this.ConnectionSucessfull = result || false;
  }
}

export class ChatOptions implements chatDefinitions.IChatOptions {
  public interval: number; 		//ms
  public channel: string;		//
  public authenticationToken: string; 	// 
  

  
  constructor(interval: number, channel: string, authenticationToken: string) {
    this.interval = interval ?? 3000;
    this.channel = channel;
    this.authenticationToken = authenticationToken;
  }
}

export class Message implements chatDefinitions.IMessage {
  public MessageId: string;
  public MessageTimestamp: number	//unix time utc

  public SenderId: string;
  public SenderUsername: string;

  public Content: string;

  constructor (id: string, time: number, senderId:string, senderUsername: string, content: string) {
    this.MessageId = id;
    this.MessageTimestamp = time;
    this.SenderId = senderId;
    this.SenderUsername = senderUsername;
    this.Content = content;
  }
}
