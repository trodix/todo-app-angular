import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../todo.service';
import {
  LoadTodoItemsAction,
  LoadTodoItemsFailureAction,
  LoadTodoItemsSuccessAction,
  TodoActionTypes,
  UpdateTodoItemAction,
  UpdateTodoItemFailureAction,
  UpdateTodoItemSuccessAction,
  DeleteTodoItemAction,
  DeleteTodoItemFailureAction,
  DeleteTodoItemSuccessAction,
} from '../actions/todo-item.actions';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoEffects {

  @Effect() loadTodoItems$ = this.actions$
    .pipe(
      ofType<LoadTodoItemsAction>(TodoActionTypes.LOAD_TODO_ITEMS),
      mergeMap(
        () => this.todoService.getTodoItems()
          .pipe(
            map((data: TodoItem[]) => new LoadTodoItemsSuccessAction(data)),
            catchError((error: Error) => of(new LoadTodoItemsFailureAction(error)))
          )
      )
    );

  @Effect() updateTodoItem$ = this.actions$
    .pipe(
      ofType<UpdateTodoItemAction>(TodoActionTypes.UPDATE_TODO_ITEM),
      mergeMap(
        (action: UpdateTodoItemAction) => this.todoService.updateTodoItem(action.payload)
          .pipe(
            map((data: TodoItem) => new UpdateTodoItemSuccessAction(data)),
            catchError((error: Error) => of(new UpdateTodoItemFailureAction(error)))
          )
      )
    );

  @Effect() deleteTodoItem$ = this.actions$
  .pipe(
    ofType<DeleteTodoItemAction>(TodoActionTypes.DELETE_TODO_ITEM),
    mergeMap(
      (action: DeleteTodoItemAction) => this.todoService.deleteTodoItem(action.payload)
        .pipe(
          map(() => new DeleteTodoItemSuccessAction(action.payload)),
          catchError((error: Error) => of(new DeleteTodoItemFailureAction(error)))
        )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) { }

}
