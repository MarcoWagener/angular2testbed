import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UserService {
	user: User;

  	constructor() {
  		this.user = new User();
  		this.user.name = 'Marco';
  		this.user.isLoggedIn = true;
  	}
}
