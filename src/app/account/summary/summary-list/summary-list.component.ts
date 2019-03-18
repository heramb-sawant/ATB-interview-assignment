import { Component, OnInit } from '@angular/core';

import { Card } from '../../../shared/models/card.model';
import { CardService } from '../../../shared/services/card.service';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {

  debitCards: Card[] = [];
  creditCards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    const userId = localStorage.getItem('authenticatedUserId');
    // object represents search params
    this.debitCards = this.cardService.getCards(userId, { transactionType: 'Debit' });
    this.creditCards = this.cardService.getCards(userId, { transactionType: 'Credit' });
  }

}
