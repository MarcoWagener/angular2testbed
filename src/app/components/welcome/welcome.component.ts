import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UserService } from '../../services/user.service';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	welcomeMessage: string = '';
	personName: string = '';
	isLoggedIn: Observable<boolean>;

  	constructor(private userService: UserService,
  		private personService: PersonService) { }

	ngOnInit() {
		// this.welcomeMessage = this.userService.user.isLoggedIn ?
		// 	'Welcome, ' + this.userService.user.name :
		// 	'Please log in.';

		this.personService.getName().then(response => this.personName = response);
	}
}
