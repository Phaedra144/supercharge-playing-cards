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
  selectedCard: Card;

  constructor() { }

  ngOnInit() {
    this.getMemoryCards();
  }

  getMemoryCards() {
    let count = 1;
    while (count != 3) {
      for (let index = 0; index < CARDS.length; index++) {
        this.cards.push(new Card(CARDS[index].name, CARDS[index].imgUrl, index * count));
      }
      count++;
    }
  }

  onCardClick(card) {
    this.selectedCard = card;
  }
}
