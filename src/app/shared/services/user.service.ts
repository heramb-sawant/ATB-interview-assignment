import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() { }

  users: User[] = [
    new User('sdsf32', 'tony-stark', 'Tony', 'Stark', 342342322, 243534),
    new User('d5g3d5', 'steve-rogers', 'Steve', 'Rogers', 9456, 234)
  ];

  // api call should be GET/api/users
  getUsers(): User[] {
    return this.users;
  }

  // api call should be GET/api/users/{userId}
  getUser(userId: string): User {
    return this.users.find(user => user.id === userId);
  }
}
