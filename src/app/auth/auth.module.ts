import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { AuthEffects } from './store/effects/auth.effects';
import { authFeatureKey, reducer as AuthReducer } from './store/reducers/auth.reducer';

const authRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(authRoutes),
  ]
})
export class AuthModule { }
