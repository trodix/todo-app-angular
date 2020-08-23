import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoModule } from '../shared/components/todo/todo.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    TodoModule
  ]
})
export class HomeModule { }
