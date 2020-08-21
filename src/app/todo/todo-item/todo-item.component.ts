import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

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

export interface TodoItem {
  id: string;
  title: string;
  done: boolean;
}
