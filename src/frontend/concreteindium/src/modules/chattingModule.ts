import * as chatDefinitions from '../interfaces/chattingModule';

export default class ChattingModule implements chatDefinitions.default {
  public updatedChatCallback: () => chatDefinitions.IMessage[];
  public chatOptions: chatDefinitions.IChatOptions; 

  constructor(callback: () => chatDefinitions.IMessage[], options: chatDefinitions.IChatOptions) {
    this.updatedChatCallback = callback;
    this.chatOptions = options;
  }


  public async Connect(): Promise<chatDefinitions.iChatConnectionResult>{
   return new ChatConnectionResult(); 
  }

}


class ChatConnectionResult implements chatDefinitions.iChatConnectionResult {

}
