import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor( ) { }

}
