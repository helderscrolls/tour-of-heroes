import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{

  heroes: Hero[]; 

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
}
