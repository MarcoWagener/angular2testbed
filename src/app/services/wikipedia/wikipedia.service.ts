import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikipediaService {

  constructor(private jsonp: Jsonp) {}

  search (term: string) {
  	var search = new URLSearchParams();

  	search.set('action', 'opensearch');
  	search.set('search', term);
  	search.set('format', 'json');
    // search.set('callback', 'JSONP_CALLBACK');

  	return this.jsonp
  				.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
          .map(response => <string[]> response.json()[1]);
  }
}
