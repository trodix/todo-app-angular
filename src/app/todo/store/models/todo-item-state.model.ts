import { TodoItem } from './todo-item.model';
import { TodoState } from '../reducers/todo-item.reducer';

export interface AppState {
  readonly todo: TodoState;
}
