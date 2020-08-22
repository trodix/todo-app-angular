import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../store/models/todo-item.model';
import { TodoService } from '../todo.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/todo-item-state.model';
import { Observable } from 'rxjs';
import { LoadTodoItemsAction, SaveTodoItemAction } from '../store/actions/todo-item.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItems$: Observable<TodoItem[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  todoModel: TodoItem = {
    title: '',
    done: false
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todoItems$ = this.store.select(store => store.todo.list);
    this.loading$ = this.store.select(store => store.todo.loading);
    this.error$ = this.store.select(store => store.todo.error);

    this.store.dispatch(new LoadTodoItemsAction());
  }

  handleAddTodoItem(): void {
    if (this.todoModel.title.length > 0) {
      this.store.dispatch(new SaveTodoItemAction(this.todoModel));
    }
  }

}
