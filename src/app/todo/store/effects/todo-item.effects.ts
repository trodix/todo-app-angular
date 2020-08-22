import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActionTypes, LoadTodoItemsAction, LoadTodoItemsSuccessAction, LoadTodoItemsFailureAction } from '../actions/todo-item.actions';
import { TodoService } from '../../todo.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {

  @Effect() loadTodoItems$ = this.actions$
    .pipe(
      ofType<LoadTodoItemsAction>(TodoActionTypes.LOAD_TODO_ITEMS),
      mergeMap(
        () => this.todoService.getTodoItems()
          .pipe(
            map(data => new LoadTodoItemsSuccessAction(data)),
            catchError(error => of(new LoadTodoItemsFailureAction(error)))
          )
      )
    );

  constructor(private actions$: Actions, private todoService: TodoService) {}

}
