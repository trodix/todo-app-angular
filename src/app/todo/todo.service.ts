import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlApi = 'http://127.0.0.1:8000/v1/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.urlApi);
  }

  updateTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.urlApi + `/${todoItem.id}`, todoItem);
  }

  deleteTodoItem(todoItem: TodoItem): Observable<void> {
    return this.http.delete<void>(this.urlApi + `/${todoItem.id}`);
  }

}
