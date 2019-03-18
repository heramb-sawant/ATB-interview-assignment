export class User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  balance: number;

  constructor(id: string, username: string, firstName: string, lastName: string, balance: number) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }
}
