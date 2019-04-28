import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
