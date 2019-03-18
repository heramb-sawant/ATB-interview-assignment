import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  users: {
    username: string;
    password: string;
    userId: string;
  }[] = [
    { username: 'tony-stark', password: 'password', userId: 'sdsf32'},
    { username: 'steve-rogers', password: 'password', userId: 'd5g3d5'}
  ]

  // returning boolean right now to mock errors
  login(username: string, password: string): boolean {
    let user = this.users.find(user => user.username === username && user.password === password)
    if (!user) {
      return false
    } else {
      localStorage.setItem('authenticatedUserId', user.userId);
      return true
    }
  }

  logout() {
    console.log('clearing storeage')
    localStorage.clear();
  }
}
