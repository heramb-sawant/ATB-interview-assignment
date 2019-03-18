import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameForm = new FormControl('', [
    Validators.required
  ]);
  passwordForm = new FormControl('', [
    Validators.required
  ]);
  displayCredentialsError = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  login() {
    console.log('loggingin');
    if (!this.usernameForm.hasError('required') && !this.passwordForm.hasError('required')) {
      const isUserAuthenticated = this.authenticationService.login(this.usernameForm.value, this.passwordForm.value);
      if (!isUserAuthenticated) {
        this.displayCredentialsError = true;
      } else {
        this.router.navigateByUrl('/account');
      }
    }
  }
}
