export default interface IChattingModule {
  updateChatCallback: (message: IMessage[]) => void;
  chatOptions: IChatOptions; 


  Connect(): Promise<IChatConnectionResult>;
  SendMessage(message: IMessage): boolean;
}



export interface IMessage {
  MessageId: string;
  MessageTimestamp: number	//unix time utc

  SenderId: string;
  SenderUsername: string;

  Content: string;
}

export interface IChatOptions {
  interval: number; 		//ms
  channel: string;		//
  authenticationToken: string; 	// 
}

export interface IChatConnectionResult {
  ConnectionSucessfull: boolean;
}
