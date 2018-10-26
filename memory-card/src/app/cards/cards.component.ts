import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../card-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  selectedCards: Card[] = [];

  constructor() { }

  ngOnInit() {
    this.getMemoryCards();
  }

  getMemoryCards() {
    let count = 0;
    while (count !== 2) {
      for (let index = 0; index < CARDS.length; index++) {
        this.cards.push(new Card(CARDS[index].name, CARDS[index].imgUrl));
      }
      count++;
    }
  }

  onCardClick(card) {
    if (this.selectedCards[0] == null) {
      this.selectedCards[0] = card;
    } else if (this.selectedCards[1] == null) {
      this.selectedCards[1] = card;
    } else {
      this.selectedCards = [];
    }
  }
}
