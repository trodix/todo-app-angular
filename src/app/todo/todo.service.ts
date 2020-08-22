import { Injectable } from '@angular/core';
import { TodoItem } from './store/models/todo-item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private TODO_URL = 'http://127.0.0.1:8000/v1/todos';

  constructor(private http: HttpClient) { }

  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.TODO_URL);
  }

  saveTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.TODO_URL, todoItem);
  }

  updateTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.TODO_URL + `/${todoItem.id}`, todoItem);
  }

  deleteTodoItem(todoItem: TodoItem): Observable<void> {
    return this.http.delete<void>(this.TODO_URL + `/${todoItem.id}`);
  }

}
