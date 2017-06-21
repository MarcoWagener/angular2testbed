import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from '../../services/wikipedia/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  
  items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  search(term) {
  	this.items = this.wikipediaService.search(term);
  }

	ngOnInit() {

	}
}
