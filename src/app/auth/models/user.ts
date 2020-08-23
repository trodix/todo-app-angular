import { v4 as uuid } from 'uuid';

export class User {
  id?: uuid;
  email?: string;
  username?: string;
  password?: string;
  token?: string;
}
