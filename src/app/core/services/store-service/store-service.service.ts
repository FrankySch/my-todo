import { Injectable } from '@angular/core';
import { ILogInUser } from '../../interfaces/login-user.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreServiceService {
  constructor() {}

  user: ILogInUser = {
    id: '',
    username: '',
    isLoggedIn: false,
    isAdmin: false,
    accessToken: '',
  };
}
