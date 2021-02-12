import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';

const homeRoutes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ]
})
export class HomeModule { }
