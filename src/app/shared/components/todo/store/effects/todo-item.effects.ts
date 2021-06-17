import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { TodoService } from '../../todo.service';
import * as TodoActions from '../actions/todo-item.actions';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoEffects {

  loadTodoItems$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.LoadTodoItems),
    mergeMap(
      () => this.todoService.getTodoItems()
        .pipe(
          map((data: TodoItem[]) => TodoActions.LoadTodoItemsSuccess({ todoItems: data })),
          catchError((error: Error) => of(TodoActions.LoadTodoItemsFailure({ error })))
        )
    )
  ));

  saveTodoItem$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.SaveTodoItem),
    tap((i) => console.log("ok" + i)),
    mergeMap(
      ({ todoItem }) => this.todoService.saveTodoItem(todoItem)
        .pipe(
          map((data: TodoItem) => TodoActions.SaveTodoItemSuccess({ todoItem: data })),
          catchError((error: Error) => of(TodoActions.SaveTodoItemFailure({ error })))
        )
    )
  ));

  updateTodoItem$ = createEffect(() => this.actions$
    .pipe(
      ofType(TodoActions.UpdateTodoItem),
      mergeMap(
        ({ todoItem }) => this.todoService.updateTodoItem(todoItem)
          .pipe(
            map((data: TodoItem) => TodoActions.UpdateTodoItemSuccess({ todoItem: data })),
            catchError((error: Error) => of(TodoActions.UpdateTodoItemFailure({ error })))
          )
      )
    ));

  deleteTodoItem$ = createEffect(() => this.actions$
    .pipe(
      ofType(TodoActions.DeleteTodoItem),
      mergeMap(
        ({ todoItem }) => this.todoService.deleteTodoItem(todoItem)
          .pipe(
            map(() => TodoActions.DeleteTodoItemSuccess({ todoItem })),
            catchError((error: Error) => of(TodoActions.DeleteTodoItemFailure({ error })))
          )
      )
    ));

  constructor(private actions$: Actions, private todoService: TodoService) { }

}
