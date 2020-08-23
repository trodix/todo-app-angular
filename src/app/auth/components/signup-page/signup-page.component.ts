import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user);
  }

}
