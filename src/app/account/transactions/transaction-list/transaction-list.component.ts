import { Component, OnInit } from '@angular/core';

import { Transaction } from '../../../shared/models/transaction.model';
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    const userId = localStorage.getItem('authenticatedUserId');
    this.transactions = this.transactionService.getTransactions(userId);
  }

}
