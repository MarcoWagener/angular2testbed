import { Injectable } from '@angular/core';

import { Person } from '../models/person';

@Injectable()
export class PersonService {

	person: Person;

	constructor() {
		this.person = { name: 'MyPersonName', surname: 'MyPersonSurname' };
	}

	getName(): Promise<string> {
		return Promise.resolve(this.person.name);
	}
}
