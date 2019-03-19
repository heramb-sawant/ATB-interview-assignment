import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    const userId: string = localStorage.getItem('authenticatedUserId');
    this.user = this.userService.getUser(userId);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/authentication');
  }
}
