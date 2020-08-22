import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../store/models/todo-item.model';
import { TodoService } from '../todo.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/todo-item-state.model';
import { Observable } from 'rxjs';
import { LoadTodoItemsAction } from '../store/actions/todo-item.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItems$: Observable<TodoItem[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todoItems$ = this.store.select(store => store.todo.list);
    this.loading$ = this.store.select(store => store.todo.loading);
    this.error$ = this.store.select(store => store.todo.error);

    this.store.dispatch(new LoadTodoItemsAction());
  }

}
