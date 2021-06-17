import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoItemActions from '../store/actions/todo-item.actions';
import { TodoItem } from '../store/models/todo-item.model';
import * as fromTodo from '../store/reducers/todo-item.reducer';
import { selectTodoError, selectTodoList, selectTodoLoading } from '../store/selectors/todo-item.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItems$: Observable<TodoItem[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  todoForm: FormGroup;
  //  {
  //   title: '',
  //   done: false
  // };

  constructor(private store$: Store<fromTodo.State>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoItems$ = this.store$.select(selectTodoList);
    this.loading$ = this.store$.select(selectTodoLoading);
    this.error$ = this.store$.select(selectTodoError);

    this.store$.dispatch(TodoItemActions.LoadTodoItems());

    this.todoForm = this.fb.group({
      title: [''],
      done: [false]
    });
  }

  handleAddTodoItem(): void {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value);
      this.store$.dispatch(TodoItemActions.SaveTodoItem({ todoItem: this.todoForm.value }));
      this.todoForm.reset;
    }
  }

}
