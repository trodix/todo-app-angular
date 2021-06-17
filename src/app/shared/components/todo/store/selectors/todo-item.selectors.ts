import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey, State as TodoState } from '../reducers/todo-item.reducer';
import { v4 as uuid } from 'uuid';
import { TodoItem } from '../models/todo-item.model';

export const selectTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodoList = createSelector(
  selectTodoState,
  (state: TodoState) => state.list
);

export const selectTodoLoading = createSelector(
  selectTodoState,
  (state: TodoState) => state.loading
);

export const selectTodoError = createSelector(
  selectTodoState,
  (state: TodoState) => state.error
);

export const selectTodoItemById = (todoItemId: uuid) =>
  createSelector(
    selectTodoList,
    (todoItems: TodoItem[]) =>
      todoItems.find(t => t?.id === todoItemId)
  );
