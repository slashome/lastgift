import { User } from '../users.interfaces';

export interface GroupShort {
  slug: string;
  name: string;
  users: User[];
}
