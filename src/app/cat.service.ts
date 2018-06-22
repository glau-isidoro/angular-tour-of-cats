import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Cat } from './cat';
import { CATS } from './mock-cats';

@Injectable({ providedIn: 'root' })

export class CatService {

  constructor(private messageService: MessageService) { }

  getCats(): Observable<Cat[]> {
    this.messageService.add('CatService: fetched cats');
    return of(CATS);
  }

  getCat(id: number): Observable<Cat> {
    this.messageService.add(`CatService: fetched cat id=${id}`);
    return of(CATS.find(cat => cat.id === id))
  }
}
