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
    for (let index = 0; index < 2; index++) {
      this.cards = this.cards.concat(CARDS);  
    }
  }

  onCardClick(card) {
    this.selectedCard = card;
  }
}
