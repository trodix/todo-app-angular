import { createAction, props } from '@ngrx/store';
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

export const LoadTodoItems = createAction(
  TodoActionTypes.LOAD_TODO_ITEMS
);

export const LoadTodoItemsSuccess = createAction(
  TodoActionTypes.LOAD_TODO_ITEMS_SUCCESS,
  props<{ todoItems: TodoItem[] }>()
);

export const LoadTodoItemsFailure = createAction(
  TodoActionTypes.LOAD_TODO_ITEMS_FAILURE,
  props<{ error: Error }>()
);

export const SaveTodoItem = createAction(
  TodoActionTypes.SAVE_TODO_ITEM,
  props<{ todoItem: TodoItem }>()
);

export const SaveTodoItemSuccess = createAction(
  TodoActionTypes.SAVE_TODO_ITEM_SUCCESS,
  props<{ todoItem: TodoItem }>()
);

export const SaveTodoItemFailure = createAction(
  TodoActionTypes.SAVE_TODO_ITEM_FAILURE,
  props<{ error: Error }>()
);

export const UpdateTodoItem = createAction(
  TodoActionTypes.UPDATE_TODO_ITEM,
  props<{ todoItem: TodoItem }>()
);

export const UpdateTodoItemSuccess = createAction(
  TodoActionTypes.UPDATE_TODO_ITEM_SUCCESS,
  props<{ todoItem: TodoItem }>()
);

export const UpdateTodoItemFailure = createAction(
  TodoActionTypes.UPDATE_TODO_ITEM_FAILURE,
  props<{ error: Error }>()
);

export const DeleteTodoItem = createAction(
  TodoActionTypes.DELETE_TODO_ITEM,
  props<{ todoItem: TodoItem }>()
);

export const DeleteTodoItemSuccess = createAction(
  TodoActionTypes.DELETE_TODO_ITEM_SUCCESS,
  props<{ todoItem: TodoItem }>()
);

export const DeleteTodoItemFailure = createAction(
  TodoActionTypes.DELETE_TODO_ITEM_FAILURE,
  props<{ error: Error }>()
);
