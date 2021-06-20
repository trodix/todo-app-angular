import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModule } from './components/todo/todo.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoModule
  ],
  exports: [
    TodoModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
