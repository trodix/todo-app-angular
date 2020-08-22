import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../store/models/todo-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/todo-item-state.model';
import { UpdateTodoItemAction, DeleteTodoItemAction } from '../store/actions/todo-item.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  handleCompleteStatus(): void {
    const updatedItem: TodoItem = { ...this.todoItem };
    updatedItem.done = !this.todoItem.done;

    this.store.dispatch(new UpdateTodoItemAction(updatedItem));
  }

  handleRemoveItem(): void {
    this.store.dispatch(new DeleteTodoItemAction(this.todoItem));
  }

}
