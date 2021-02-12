import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './store/effects/todo-item.effects';
import { TodoReducer } from './store/reducers/todo-item.reducer';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    StoreModule.forFeature('todoFeature', {
      todo: TodoReducer
    }),
    EffectsModule.forFeature([
      TodoEffects
    ]),
  ],
  exports: [
    TodoListComponent,
    TodoItemComponent
  ],
  providers: [],
})
export class TodoModule { }
