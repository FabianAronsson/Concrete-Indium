import * as mongoose from 'mongoose';

export default interface DbModule {
  connect(): void;
  dispose(): void;
  storeInput(input: mongoose.Document): Promise<void>;
  isConnected(): boolean;

}
