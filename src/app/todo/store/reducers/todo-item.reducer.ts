import { TodoItem } from '../models/todo-item.model';
import { TodoAction, TodoActionTypes } from '../actions/todo-item.actions';

export interface TodoState {
  list: TodoItem[];
  loading: boolean;
  error: Error;
}

const initialState: TodoState = {
  list: [],
  loading: false,
  error: undefined
};

export function TodoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return { ...state, list: [ ...state.list, action.payload] };
    case TodoActionTypes.LOAD_TODO_ITEMS:
      return { ...state, loading: true };
    case TodoActionTypes.LOAD_TODO_ITEMS_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case TodoActionTypes.LOAD_TODO_ITEMS_FAILURE:
      return { ...state, list: action.payload, loading: false };

    default:
      return state;
  }
}
