export class User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  balance: number;
  debt: number;

  constructor(id: string, username: string, firstName: string, lastName: string, balance: number, debt: number) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.debt = debt;
  }
}
