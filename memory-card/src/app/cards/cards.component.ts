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
    this.cards = [];
    this.getMemoryCards();
  }

  ngAfterViewChecked() {
    if (this.selectedCards.length === 2) {
      this.checkAndRemoveCards();
    }
  }

  getMemoryCards() {
    let count = 1;
    while (count !== 3) {
      for (let index = 0; index < CARDS.length; index++) {
        this.cards.push(new Card(CARDS[index].name, CARDS[index].imgUrl, index * count));
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
    } else {
      this.selectedCards = [];
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
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }
}
