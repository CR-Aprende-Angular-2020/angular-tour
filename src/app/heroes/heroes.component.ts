import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //(old Paso 4)
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  // heroes = HEROES; (old Paso 4)

  //constructor() { } (old Paso 4)

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = HEROES; // this.heroService.getHeroes(); //(old Paso 4)
    //this.heroes = this.heroService.getHeroes(); // NO ANDA
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
