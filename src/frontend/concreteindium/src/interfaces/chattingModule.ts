export default interface IChattingModule {
  updatedChatCallback: () => IMessage[];
  chatOptions: IChatOptions; 


  Connect(): void;
}



export interface IMessage {
  
}

export interface IChatOptions {
  
}

export interface iChatConnectionResult {

}
