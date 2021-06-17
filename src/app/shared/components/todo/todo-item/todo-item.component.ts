import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TodoItemActions from '../store/actions/todo-item.actions';
import { TodoItem } from '../store/models/todo-item.model';
import * as fromTodo from '../store/reducers/todo-item.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = null;
  editMode = false;

  todoModel: TodoItem = {
    title: '',
    done: false
  };

  constructor(private store$: Store<fromTodo.State>) { }

  ngOnInit(): void {
  }

  handleCompleteStatus(): void {
    const updatedItem: TodoItem = { ...this.todoItem };
    updatedItem.done = !this.todoItem.done;

    this.store$.dispatch(TodoItemActions.UpdateTodoItem({ todoItem: updatedItem }));
  }

  handleRemoveItem(): void {
    this.store$.dispatch(TodoItemActions.DeleteTodoItem({ todoItem: this.todoItem }));
  }

  handleEditItem(): void {
    this.todoModel = { ...this.todoItem };
    this.editMode = true;
  }

  handleSaveEditItem(form: NgForm): void {
    if (form.valid) {
      this.store$.dispatch(TodoItemActions.UpdateTodoItem({ todoItem: this.todoModel }));
      this.editMode = false;
    }
  }

}
