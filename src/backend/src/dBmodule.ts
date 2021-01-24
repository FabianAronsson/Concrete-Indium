import * as mongoose from "mongoose";
import IDbModule from './interfaces/dbmodule';
import {injectable} from 'inversify';
import * as dotenv from 'dotenv';


@injectable()
export default class DbModule implements IDbModule {
  private _db : mongoose.Connection;


  public connect(): void {
      mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
  
      this._db = mongoose.connection;
      this._db.on('error', console.error.bind(console, 'connection error:'));
      this._db.on('open', function() : void{
        dotenv.config();
        //PogChamp
	  console.log("opened db connection");
      });
      this._db.on('close', () => {
	  console.log("closed db connection");
      });
  }

  public dispose(): void {
      if (this._db != null) {
          this._db.close();
	  this._db == null;
      }
    
  }

 public isConnected(): boolean {
  return this._db != null;
 }
 


  public async storeInput(input: mongoose.Document): Promise<void>{
      await input.save(() => {
        //console.log("save successful")
      });
  };

}



