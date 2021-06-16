import { createReducer, on, Action } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo-item.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  list: TodoItem[];
  loading: boolean;
  error: Error;
}

const initialState: State = {
  list: [],
  loading: false,
  error: undefined
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.LoadTodoItemsSuccess, (state: State, { todoItems }) => ({ ...initialState, list: todoItems })),
  on(TodoActions.LoadTodoItemsFailure, (state: State, { error }) => ({ ...initialState, error })),
  on(TodoActions.SaveTodoItemSuccess, (state: State, { todoItem }) => ({ ...initialState, list: [...state.list, todoItem] })),
  on(TodoActions.SaveTodoItemFailure, (state: State, { error }) => ({ ...initialState, error })),
  on(TodoActions.UpdateTodoItemSuccess, (state: State, { todoItem }) => {
    const itemStateIndex = state.list.map(i => i.id).indexOf(todoItem.id);
    const updatedStateList = [...state.list];
    updatedStateList[itemStateIndex] = todoItem;
    return { ...initialState, list: updatedStateList };
  }),
  on(TodoActions.UpdateTodoItemFailure, (state: State, { error }) => ({ ...initialState, error })),
  on(TodoActions.DeleteTodoItemSuccess, (state: State, { todoItem }) => ({ ...initialState, list: state.list.filter(i => i.id !== todoItem.id) })),
  on(TodoActions.DeleteTodoItemFailure, (state: State, { error }) => ({ ...initialState, error })),
);

export function reducer(state: State | undefined, action: Action): State {
  return todoReducer(state, action);
}
