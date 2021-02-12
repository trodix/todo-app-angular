import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import * as AuthActions from '../../store/actions/auth.actions';
import * as fromAuth from '../../store/reducers/auth.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public user: User = new User();

  constructor(private store$: Store<fromAuth.State>) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store$.dispatch(AuthActions.Login({ user: this.user }));
  }

}
