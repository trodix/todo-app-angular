import { Component, OnInit } from '@angular/core';
import { RegisterCredentials } from '../../models/register-credentials';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  registerCredentials: RegisterCredentials = new RegisterCredentials();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerCredentials);
  }

}
