export class Transaction {
  id: string;
  cardId: string;
  userId: string;
  date: Date;
  payee: string;
  category: string;
  amount: number;

  constructor(
    id: string,
    cardId: string,
    userId: string,
    date: Date,
    payee: string,
    category: string,
    amount: number
  ) {
    this.id = id;
    this.cardId = cardId;
    this.userId = userId;
    this.date = date;
    this.payee = payee;
    this.category = category;
    this.amount = amount;
  }
}
