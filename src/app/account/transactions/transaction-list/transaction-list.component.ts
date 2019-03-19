import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Transaction } from '../../../shared/models/transaction.model';
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];
  displayedColumns: string[] = ['date', 'payee', 'category', 'account', 'amount'];
  dataSource;

  constructor(private transactionService: TransactionService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    const userId = localStorage.getItem('authenticatedUserId');
    this.transactions = this.transactionService.getTransactions(userId);
    this.dataSource = new MatTableDataSource(this.transactions);
    this.dataSource.sort = this.sort;
  }

}
