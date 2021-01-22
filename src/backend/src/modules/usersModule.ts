import * as mongoose from "mongoose";
import user from "../interfaces/user";
import userModule from "../interfaces/userModule";
import { injectable, inject } from "inversify";
import "reflect-metadata";


 
const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  passwordHash: String,
  salt: String,
  tokenGeneration: String
});

const User = mongoose.model('Person', userSchema);

@injectable()
export default class UserModule implements userModule{


   createUser(username: String, email: String, password: String): void {
      var newUser = new User({
        username: username,
        email: email,
        password: password
      });

          
      //replace with db module save
   }
  
  

  public async getUser(email : String): Promise<user> {
    let user = <unknown>(await User.findOne({email: email}))
    return <user>user;
    };


  }
