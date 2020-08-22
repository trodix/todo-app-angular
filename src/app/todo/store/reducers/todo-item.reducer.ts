import { TodoAction, TodoActionTypes } from '../actions/todo-item.actions';
import { TodoItem } from '../models/todo-item.model';

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
    case TodoActionTypes.LOAD_TODO_ITEMS:
      return { ...state, loading: true };

    case TodoActionTypes.LOAD_TODO_ITEMS_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case TodoActionTypes.LOAD_TODO_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.UPDATE_TODO_ITEM:
      return { ...state, loading: true };

    case TodoActionTypes.UPDATE_TODO_ITEM_SUCCESS:
      const itemStateIndex = state.list.map(i => i.id).indexOf(action.payload.id);
      const updatedStateList = [ ...state.list ];
      updatedStateList[itemStateIndex] = action.payload;
      return { ...state, list: updatedStateList, loading: false };

    case TodoActionTypes.UPDATE_TODO_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };


    default:
      return state;
  }
}
