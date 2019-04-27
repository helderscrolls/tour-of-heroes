import { Component } from '@angular/core';

import { Hero } from 'src/app/classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {

  heroes: Hero[]; 

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }


  constructor(private heroService:HeroService) { }

}
