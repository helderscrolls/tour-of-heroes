import { Component } from '@angular/core';
import { Hero } from 'src/app/classes/hero';
import { HEROES } from '../../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {

  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };


  constructor() { }

}
