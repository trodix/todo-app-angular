import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../store/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = null;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleCompleteStatus(): void {
    this.todoItem.done = !this.todoItem.done;
    this.todoService.updateTodoItem(this.todoItem).subscribe((todoItem: TodoItem) => this.todoItem = todoItem);
  }

  handleRemoveItem(): void {
    this.todoService.deleteTodoItem(this.todoItem).subscribe();
  }

}
