import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor() { }

  transactions: Transaction[] = [
    new Transaction('df5t6e', 'vdh454', 'sdsf32', new Date('2019-3-1'), 'A & W', 'Food', 1397),
    new Transaction('jk4dg3', 'vdh454', 'sdsf32', new Date('2019-3-3'), 'Nike', 'Clothing', 12123),
    new Transaction('4h7d32', 'fsdg45', 'sdsf32', new Date('2019-3-3'), 'Starbucks', 'Food', 583),
    new Transaction('8k9utr', 'jkf675', 'sdsf32', new Date('2019-3-4'), 'Shwarma', 'Food', 997),
    new Transaction('dga24e', 'vdh454', 'sdsf32', new Date('2019-3-5'), 'A & W', 'Food', 1397),
    new Transaction('dht743', 'fsdg45', 'sdsf32', new Date('2019-3-6'), 'Shwarma', 'Food', 1212),
    new Transaction('899h76', 'vdh454', 'sdsf32', new Date('2019-3-9'), 'Starbucks', 'Food', 583),
    new Transaction('j6d4v9', 'nvb3t7', 'sdsf32', new Date('2019-3-11'), 'Burger King', 'Food', 1397),
    new Transaction('msa711', 'vdh454', 'sdsf32', new Date('2019-3-12'), 'DQ', 'Food', 1023),
    new Transaction('p2fs62', 'fsdg45', 'sdsf32', new Date('2019-3-12'), 'Starbucks', 'Food', 583),
    new Transaction('oid872', 'vdh454', 'sdsf32', new Date('2019-3-13'), 'Carls', 'Food', 1397),
    new Transaction('siou82', 'vdh454', 'sdsf32', new Date('2019-3-14'), 'Rayban', 'Clothing', 8123),
    new Transaction('12dqw3', 'vdh454', 'sdsf32', new Date('2019-3-15'), 'Starbucks', 'Food', 583),
    new Transaction('09fd32', 'jkf675', 'sdsf32', new Date('2019-3-16'), '7-11', 'Food', 197),
    new Transaction('efd920', 'nvb3t7', 'sdsf32', new Date('2019-3-17'), 'Shwarma', 'Food', 1123),
    new Transaction('zc0932', 'vdh454', 'sdsf32', new Date('2019-3-18'), 'Starbucks', 'Food', 583),
    new Transaction('kbg84t', 'gg3gj5', 'd5g3d5', new Date('2019-3-1'), 'Footlocker', 'Clothing', 10123),
    new Transaction('ytrey4', 'gg3gj5', 'd5g3d5', new Date('2019-3-2'), 'Starbucks', 'Food', 213),
    new Transaction('sfdw57', 'zgw564', 'd5g3d5', new Date('2019-3-2'), 'A & W', 'Food', 1115),
    new Transaction('7e6he6', 'zgw564', 'd5g3d5', new Date('2019-3-6'), 'Starbucks', 'Food', 213),
    new Transaction('ue5ed5', 'zgw564', 'd5g3d5', new Date('2019-3-8'), 'Nike', 'Clothing', 12123),
    new Transaction('ue443y', 'zgw564', 'd5g3d5', new Date('2019-3-10'), 'Shwarma', 'Food', 213),
    new Transaction('yert45', 'zgw564', 'd5g3d5', new Date('2019-3-15'), 'Starbucks', 'Food', 213),
    new Transaction('436he5', 'gg3gj5', 'd5g3d5', new Date('2019-3-18'), 'Bus', 'Transportation', 225),
    new Transaction('y6e5ws', 'zgw564', 'd5g3d5', new Date('2019-3-18'), 'Starbucks', 'Food', 213)
  ];

  // api call should be GET/api/users/{userId}/transactions
  getTransactions(userId: string): Transaction[] {
    return this.transactions.filter(transaction => transaction.userId === userId);
  }

  // api call should be GET/api/users/{userId}/transactions/{transactionId}
  getTransaction(userId: string, transactionId: string): Transaction {
    return this.transactions.find(transaction => transaction.id === transactionId && transaction.userId === userId);
  }
}
