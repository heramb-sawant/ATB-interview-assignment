import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const userId: string = localStorage.getItem('authenticatedUserId');
    this.user = this.userService.getUser(userId);
  }
}
