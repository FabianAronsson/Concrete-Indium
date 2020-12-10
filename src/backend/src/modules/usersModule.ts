import * as mongoose from "mongoose";
import user from "../interfaces/user";
import userModule from "../interfaces/userModule";

 
export default class UserModule implements userModule{

  constructor() {

  const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    email: String,
    passwordHash: String,
    salt: String,
    tokenGeneration: String
  });

  const User = mongoose.model('Person', userSchema);

    createUser(username: String, email: String, password: String): void {
    var newUser = new User({
      username: username,
      email: email,
      password: password
    }); 
    return newUser
  };

  getUser(email : String): user {
    let user = User.findOne({email: email})
    return user
    };
  }
}