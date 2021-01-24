import user from './user';

export default interface userModule {

  createUser(username: String, email: String, password: String): void;
  getUser(email : String): Promise<user>;
}
