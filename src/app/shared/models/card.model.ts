export class Card {
  id: string;
  userId: string;
  number: string;
  transactionType: string;
  accountType: string;

  constructor(id: string, userId: string, number: string, transactionType: string, accountType: string) {
    this.id = id;
    this.userId = userId;
    this.number = number;
    this.transactionType = transactionType;
    this.accountType = accountType;
  }
}
