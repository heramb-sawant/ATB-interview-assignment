export class Card {
  id: string;
  userId: string;
  accountNumber: string;
  transactionType: string;
  accountType: string;

  constructor(id: string, userId: string, accountNumber: string, transactionType: string, accountType: string) {
    this.id = id;
    this.userId = userId;
    this.accountNumber = accountNumber;
    this.transactionType = transactionType;
    this.accountType = accountType;
  }
}
