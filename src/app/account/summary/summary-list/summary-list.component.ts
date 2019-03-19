import { Component, OnInit } from '@angular/core';

import { Card } from '../../../shared/models/card.model';
import { CardService } from '../../../shared/services/card.service';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {

  debitCards: Card[] = [];
  creditCards: Card[] = [];
  user: User;

  constructor(private cardService: CardService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser(localStorage.getItem('authenticatedUserId'));
    // object represents search params
    this.debitCards = this.cardService.getCards(this.user.id, { transactionType: 'Debit' });
    this.creditCards = this.cardService.getCards(this.user.id, { transactionType: 'Credit' });
  }

}
