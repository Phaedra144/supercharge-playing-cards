import { Component, OnInit } from '@angular/core';
import { CARDS } from '../card-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }
}
