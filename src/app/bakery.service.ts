import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Bakery } from './model/bakery';
import { Cake } from './model/cake';

@Injectable()
export class BakeryService {
  constructor(
    private http: HttpClient
  ) { }

  private bakeryEndpoint = 'http://dev.cakeiteasy.no/';
  private bakeryUrl = `${this.bakeryEndpoint}api/bakery/all-bakeries?includeCity=false`;
  private cakesUrl = `${this.bakeryEndpoint}api/search`;

  getBakeries(): Observable<Bakery[]> {
    return this.http.get<Bakery[]>(this.bakeryUrl).pipe(
      catchError(this.handleError('getBakeries', []))
    );
  }

  getCakes(bakery: Bakery): Observable<Cake[]> {
    return this.http.get<Cake[]>(`${this.cakesUrl}?bakery=${bakery.id}&count=100&type=1`).pipe(
      catchError(this.handleError('getCakes', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
