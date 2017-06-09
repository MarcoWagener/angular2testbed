import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	welcomeMessage: string = '';

  	constructor(private userService: UserService) { }

	ngOnInit() {
		this.welcomeMessage = this.userService.user.isLoggedIn ?
			'Welcome, ' + this.userService.user.name :
			'Please log in.';
	}

}
