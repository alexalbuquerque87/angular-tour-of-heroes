import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}
