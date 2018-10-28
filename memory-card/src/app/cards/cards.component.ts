import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../card-list';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, AfterViewChecked {

  cards: Card[] = [];
  selectedCards: Card[] = [];
  user: User;
  best: number;
  deckSize: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.cards = [];
    this.deckSize = this.dataService.deckSize;
    this.getMemoryCards(this.deckSize);
    this.user = new User();
  }

  ngAfterViewChecked() {
    if (this.selectedCards.length === 2) {
      this.checkAndRemoveCards();
    }
    if (this.cards.length === 0) {
      this.user.best = this.user.score;
      this.best = this.user.best;
    }
  }

  getMemoryCards(deckSize: number) {
    let count = 1;
    while (count !== 3) {
      for (let index = 0; index < deckSize; index++) {
        let id = 1;
        this.cards.push(new Card(CARDS[index].name, CARDS[index].imgUrl, id * count));
        id++;
      }
      count++;
    }
    this.shuffleArray(this.cards);
  }

  onCardClick(card) {
    if (this.selectedCards[0] == null) {
      this.selectedCards[0] = card;
    } else if (this.selectedCards[1] == null) {
      this.selectedCards[1] = card;
      this.user.score++;
    }
  }

  onRestartClick() {
    this.ngOnInit();
  }

  checkAndRemoveCards() {
    if (this.selectedCards[0].name === this.selectedCards[1].name && this.selectedCards[0].id !== this.selectedCards[1].id) {
      for (let i = 0; i < 2; i++) {
        this.cards = this.cards.filter(item => item !== this.selectedCards[i]);
      }
    }
    this.selectedCards = [];
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
