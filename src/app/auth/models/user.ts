import { v4 as uuid } from 'uuid';

export class User {
  accessToken?: string;
  refreshToken?: string;
  id?: uuid;
  username?: string;
  email?: string;
  password?: string;
  roles?: string[];
}
