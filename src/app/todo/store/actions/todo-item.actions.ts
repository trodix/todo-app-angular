import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo-item.model';

export enum TodoActionTypes {
  LOAD_TODO_ITEMS = '[TODO ITEM] Load Items',
  LOAD_TODO_ITEMS_SUCCESS = '[TODO ITEM] Load Items success',
  LOAD_TODO_ITEMS_FAILURE = '[TODO ITEM] Load Items failure',

  UPDATE_TODO_ITEM = '[TODO ITEM] Update Item',
  UPDATE_TODO_ITEM_SUCCESS = '[TODO ITEM] Update Item success',
  UPDATE_TODO_ITEM_FAILURE = '[TODO ITEM] Update Item failure',
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

  constructor(public payload: Error) {}
}

export class UpdateTodoItemAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_ITEM;
  todoItem: TodoItem;

  constructor(public payload: TodoItem) {}
}

export class UpdateTodoItemSuccessAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_ITEM_SUCCESS;

  constructor(public payload: TodoItem) {}
}

export class UpdateTodoItemFailureAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export type TodoAction =
  LoadTodoItemsAction
  | LoadTodoItemsSuccessAction
  | LoadTodoItemsFailureAction
  | UpdateTodoItemAction
  | UpdateTodoItemSuccessAction
  | UpdateTodoItemFailureAction
;
