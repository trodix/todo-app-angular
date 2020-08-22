import { v4 as uuid } from 'uuid';

export interface TodoItem {
  id?: uuid;
  title: string;
  done: boolean;
}
