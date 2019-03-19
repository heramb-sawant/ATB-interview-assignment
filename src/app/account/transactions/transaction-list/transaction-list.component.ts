import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Transaction } from '../../../shared/models/transaction.model';
import { TransactionService } from '../../../shared/services/transaction.service';
import { CardService } from '../../../shared/services/card.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];
  displayedColumns: string[] = ['date', 'payee', 'category', 'account', 'amount'];
  dataSource;
  userId: string = localStorage.getItem('authenticatedUserId');

  constructor(private transactionService: TransactionService, private cardService: CardService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions(this.userId);
    console.log(this.transactions)
    this.dataSource = new MatTableDataSource(this.transactions);
    this.dataSource.sort = this.sort;
  }

  getAccountName(cardId: string): string {
    return this.cardService.getCard(this.userId, cardId).accountType;
  }

}
