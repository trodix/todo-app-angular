import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavigationLayoutComponent } from './core/components/navigation-layout/navigation-layout.component';

const routes: Routes = [
  // use `component: MyComponent` for eager loading
  // use `loadChildren: () => import('./path/to/my-feature.module').then(module => module.MyModule)` for lazy loading
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
  {
    path: '',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: NavigationLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppRoutingModule { }
