import * as express from "express";
import user from "../interfaces/user"


export default interface userModule {
  
  createUser (username: String, email: String, password: String): void

  getUser(email: String): user
}
