import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../store/models/todo-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/todo-item-state.model';
import { UpdateTodoItemAction, DeleteTodoItemAction } from '../store/actions/todo-item.actions';
import { NgForm } from '@angular/forms';

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

  handleEditItem(): void {
    this.todoModel = { ...this.todoItem };
    this.editMode = true;
  }

  handleSaveEditItem(form: NgForm): void {
    if (form.valid) {
      this.store.dispatch(new UpdateTodoItemAction(this.todoModel));
      this.editMode = false;
    }
  }

}
