export class Card {
  id: string;
  userId: string;
  accountNumber: string;
  transactionType: string;
  accountType: string;
  balance: number;

  constructor(
    id: string,
    userId: string,
    accountNumber: string,
    transactionType: string,
    accountType: string,
    balance: number
  ) {
    this.id = id;
    this.userId = userId;
    this.accountNumber = accountNumber;
    this.transactionType = transactionType;
    this.accountType = accountType;
    this.balance = balance;
  }
}
