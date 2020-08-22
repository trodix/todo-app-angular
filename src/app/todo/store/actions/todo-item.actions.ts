import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo-item.model';

export enum TodoActionTypes {
  ADD_ITEM = '[TODO ITEM] Add Item',
  LOAD_TODO_ITEMS = '[TODO ITEM] Load Items',
  LOAD_TODO_ITEMS_SUCCESS = '[TODO ITEM] Load Items success',
  LOAD_TODO_ITEMS_FAILURE = '[TODO ITEM] Load Items failure'
}

export class AddItemAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM;

  constructor(public payload: TodoItem) {}
}

export class LoadTodoItemsAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_ITEMS;

  constructor() {}
}

export class LoadTodoItemsSuccessAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_ITEMS_SUCCESS;

  constructor(public payload: TodoItem[]) {}
}

export class LoadTodoItemsFailureAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_ITEMS_FAILURE;

  constructor(public payload: TodoItem[]) {}
}

export type TodoAction = AddItemAction
  | LoadTodoItemsAction
  | LoadTodoItemsSuccessAction
  | LoadTodoItemsFailureAction
;
