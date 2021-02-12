import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../store/models/todo-item.model';
import { TodoService } from '../todo.service';
import { Store } from '@ngrx/store';
import { TodoState } from '../store/reducers/todo-item.reducer';
import { Observable } from 'rxjs';
import { LoadTodoItemsAction, SaveTodoItemAction } from '../store/actions/todo-item.actions';
import { NgForm } from '@angular/forms';

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

  constructor(private store: Store<TodoState>) { }

  ngOnInit(): void {
    this.todoItems$ = this.store.select(todo => todo.list);
    this.loading$ = this.store.select(todo => todo.loading);
    this.error$ = this.store.select(todo => todo.error);

    this.store.dispatch(new LoadTodoItemsAction());
  }

  handleAddTodoItem(form: NgForm): void {
    if (form.valid) {
      this.store.dispatch(new SaveTodoItemAction({ ...this.todoModel }));
      form.resetForm();
    }
  }

}
