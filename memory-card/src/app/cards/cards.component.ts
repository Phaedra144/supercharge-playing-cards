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
    let count = 1;
    while (count !== 3) {
      for (let index = 0; index < CARDS.length; index++) {
        this.cards.push(new Card(CARDS[index].name, CARDS[index].imgUrl, index * count));
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

    if (this.selectedCards.length === 2) {
      this.checkAndRemoveCards(this.selectedCards[0], this.selectedCards[1]);
    }
  }

  checkAndRemoveCards(card1:Card, card2:Card) {
    if (card1.name === card2.name && card1.id !== card2.id) {
      this.cards = this.cards.filter(item => item !== card1);
      this.cards = this.cards.filter(item => item !== card2);
    }
  }

}
