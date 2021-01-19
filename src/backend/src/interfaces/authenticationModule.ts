import user from '../interfaces/user';

export default interface IAuthenticationModule {
  authenticateUser(token: string): boolean;
  authenticateUserWithPassword(email:string, password:string): Promise<boolean>;
  createToken(user:user): string; 

}
