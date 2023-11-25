import { GroupShort } from './groups/groups.interfaces';
import { ItemShort } from '../items/items.interfaces';

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Friend extends User {
  releaser: boolean;
  groups: GroupShort[];
  items: ItemShort;
  since: Date;
}
