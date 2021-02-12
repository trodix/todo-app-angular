import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import * as AuthActions from '../../../auth/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromAuth from '../../..//auth/store/reducers/auth.reducer';

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.scss']
})
export class NavigationLayoutComponent implements OnInit {

  routingLoading$: Observable<boolean>;

  constructor(private router: Router, private store$: Store<fromAuth.State>) { }

  ngOnInit(): void {
    this.routingLoading$ = this.router.events
      .pipe(
        map((event: RouterEvent) => {
          const loading = this.handleRouterEvent(event);
          return typeof loading === 'boolean' ? loading : true;
        })
      );
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  private handleRouterEvent(event: RouterEvent): boolean {
    if (event instanceof NavigationStart) {
      return true;
    }

    if (event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError) {
      return false;
    }
  }

  onLogout(): void {
    this.store$.dispatch(AuthActions.Logout());
  }

}
