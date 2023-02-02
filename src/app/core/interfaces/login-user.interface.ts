import { IUser } from './user.interface';

export interface ILogInUser extends IUser {
  isLoggedIn: boolean;
  accessToken: string;
}
