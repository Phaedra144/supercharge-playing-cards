import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CARDS } from '../card-list';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  deckSize: number;
  cardsLength: number[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.cardsLength = this.populateWithNumbers();
  }

  ngOnDestroy() {
    this.dataService.deckSize = this.deckSize;
  }

  addDeckSize(number) {
    this.deckSize = number;
    if (this.deckSize !== undefined) {
      this.router.navigateByUrl('/game');
    }
  }

  populateWithNumbers() {
    const numbers = [];
    for (let i = 2; i < CARDS.length + 1; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
