import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationLayoutComponent } from './components/navigation-layout/navigation-layout.component';


@NgModule({
  declarations: [NavigationLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
