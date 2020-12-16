export default interface IChattingModule {
  updatedChatCallback: () => IMessage[];
  chatOptions: IChatOptions; 


  Connect(): void;
  SendMessage(message: IMessage): boolean;
}



export interface IMessage {
  
}

export interface IChatOptions {
  interval: number; 		//ms
  channel: string;		//
  authenticationToken: string; 	// 
}

export interface IChatConnectionResult {

}
