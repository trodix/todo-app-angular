import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItemList: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todoItemList: TodoItem[]) => this.todoItemList = todoItemList);
  }

}
