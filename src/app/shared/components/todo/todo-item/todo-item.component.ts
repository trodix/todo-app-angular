import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
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

  @Input() 
  todoItem: TodoItem = null;

  editMode = false;

  todoForm: FormGroup;

  constructor(private store$: Store<fromTodo.State>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
        title: new FormControl(this.todoItem?.title)
      }
    );
  }

  handleCompleteStatus(): void {
    this.store$.dispatch(TodoItemActions.UpdateTodoItem({ todoItem: { ...this.todoItem, done: !this.todoItem.done } }));
  }

  handleRemoveItem(): void {
    this.store$.dispatch(TodoItemActions.DeleteTodoItem({ todoItem: this.todoItem }));
  }

  handleEditItem(): void {
    this.editMode = true;
  }

  handleSaveEditItem(): void {
    if (this.todoForm.valid) {
      this.store$.dispatch(TodoItemActions.UpdateTodoItem({ todoItem: { ...this.todoItem, ...this.todoForm.value } }));
      this.editMode = false;
    }
  }

}
