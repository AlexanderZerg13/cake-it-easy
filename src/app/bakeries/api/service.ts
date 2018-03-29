import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Bakery, Cake } from '../model';

// App's API
const ENDPOINT = 'http://dev.cakeiteasy.no/';
const URLS = {
  bakery: `${ENDPOINT}api/bakery/all-bakeries?includeCity=false`,
  cakes: `${ENDPOINT}api/search`,
  cake: `${ENDPOINT}api/search/get-cake`,
}

@Injectable()
export class BakeryAPIService {
  constructor(private http: HttpClient) { }

  getBakeries(): Observable<Bakery[]> {
    return this.http.get<Bakery[]>(URLS.bakery)
  }

  getCakes(bakery: Bakery): Observable<Cake[]> {
    return this.http.get<Cake[]>(`${URLS.cakes}?bakery=${bakery.id}&count=100&type=1`);
  }

  getCake(id: number): Observable<Cake> {
    return this.http.get<Cake>(`${URLS.cake}?id=${id}`);
  }
}
