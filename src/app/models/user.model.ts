export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  balance: number;

  constructor(id: string, email: string, firstName: string, lastName: string, balance: number) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }
}
