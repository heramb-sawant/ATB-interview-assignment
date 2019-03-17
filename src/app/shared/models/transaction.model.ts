export class Transaction {
  id: string;
  date: Date;
  payee: string;
  category: string;
  cardId: string;
  amount: number;

  constructor(id: string, date: Date, payee: string, category: string, cardId: string, amount: number) {
    this.id = id;
    this.date = date;
    this.payee = payee;
    this.category = category;
    this.cardId = cardId;
    this.amount = amount;
  }
}
