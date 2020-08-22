import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo-item.model';

export enum TodoActionTypes {
  LOAD_TODO_ITEMS = '[TODO ITEM] Load Items',
  LOAD_TODO_ITEMS_SUCCESS = '[TODO ITEM] Load Items success',
  LOAD_TODO_ITEMS_FAILURE = '[TODO ITEM] Load Items failure',

  SAVE_TODO_ITEM = '[TODO ITEM] Save Item',
  SAVE_TODO_ITEM_SUCCESS = '[TODO ITEM] Save Item success',
  SAVE_TODO_ITEM_FAILURE = '[TODO ITEM] Save Item failure',

  UPDATE_TODO_ITEM = '[TODO ITEM] Update Item',
  UPDATE_TODO_ITEM_SUCCESS = '[TODO ITEM] Update Item success',
  UPDATE_TODO_ITEM_FAILURE = '[TODO ITEM] Update Item failure',

  DELETE_TODO_ITEM = '[TODO ITEM] Delete Item',
  DELETE_TODO_ITEM_SUCCESS = '[TODO ITEM] Delete Item success',
  DELETE_TODO_ITEM_FAILURE = '[TODO ITEM] Delete Item failure',
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

export class SaveTodoItemAction implements Action {
  readonly type = TodoActionTypes.SAVE_TODO_ITEM;
  todoItem: TodoItem;

  constructor(public payload: TodoItem) {}
}

export class SaveTodoItemSuccessAction implements Action {
  readonly type = TodoActionTypes.SAVE_TODO_ITEM_SUCCESS;

  constructor(public payload: TodoItem) {}
}

export class SaveTodoItemFailureAction implements Action {
  readonly type = TodoActionTypes.SAVE_TODO_ITEM_FAILURE;

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

export class DeleteTodoItemAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_ITEM;
  todoItem: TodoItem;

  constructor(public payload: TodoItem) {}
}

export class DeleteTodoItemSuccessAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_ITEM_SUCCESS;

  constructor(public payload: TodoItem) {}
}

export class DeleteTodoItemFailureAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export type TodoAction =
  LoadTodoItemsAction
  | LoadTodoItemsSuccessAction
  | LoadTodoItemsFailureAction
  | SaveTodoItemAction
  | SaveTodoItemSuccessAction
  | SaveTodoItemFailureAction
  | UpdateTodoItemAction
  | UpdateTodoItemSuccessAction
  | UpdateTodoItemFailureAction
  | DeleteTodoItemAction
  | DeleteTodoItemSuccessAction
  | DeleteTodoItemFailureAction
;
