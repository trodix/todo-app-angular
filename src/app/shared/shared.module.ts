import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoModule } from './components/todo/todo.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoModule
  ],
  exports: [
    TodoModule
  ]
})
export class SharedModule { }
