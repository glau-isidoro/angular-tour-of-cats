import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Cat } from './cat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class CatService {

  private catsUrl = 'api/cats';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCats (): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl).pipe(
      tap(cats => this.log(`fetched cats`)),
      catchError(this.handleError('getCats', []))
    );
  }

  /** GET cat by id. Return `undefined` when id not found */
  getCatNo404<Data>(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/?id=${id}`;
    return this.http.get<Cat[]>(url)
    .pipe(
      map(cats => cats[0]),
      tap(c => {
        const outcome = c ? `fetched` : `did not find`;
        this.log(`${outcome} cat id=${id}`);
      }),
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    );
  }

  /** GET cat by id. Will 404 if id not found */
  getCat(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/${id}`;
    return this.http.get<Cat>(url).pipe(
      tap(_ => this.log(`fetched cat id=${id}`)),
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    );
  }

  updateCat(cat: Cat): Observable<any> {
    return this.http.put(this.catsUrl, cat, httpOptions).pipe(
      tap(_ => this.log(`updated cat id=${cat.id}`)),
      catchError(this.handleError<any>('updateCat'))
    );
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.catsUrl, cat, httpOptions).pipe(
      tap((cat: Cat) => this.log(`added cat with id=${cat.id}`)),
      catchError(this.handleError<Cat>('addCat'))
    );
  }

  deleteCat (cat: Cat | number): Observable<Cat> {
    const id = typeof cat === 'number' ? cat : cat.id;
    const url = `${this.catsUrl}/${id}}`;

    return this.http.delete<Cat>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cat id=${id}`)),
      catchError(this.handleError<Cat>('deleteCat'))
    );
  }

  searchCats(term: string): Observable<Cat[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Cat[]>(`${this.catsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found cats matching "${term}"`)),
      catchError(this.handleError<Cat[]>('searchCats', []))
    );
  }

  private log(message: string) {
    this.messageService.add('CatService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
