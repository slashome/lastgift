import { Injectable } from '@nestjs/common';
import { Friend, User } from './users.interfaces';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      id: 3,
      username: 'user',
      password: 'pass',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user: User) => user.username === username);
  }

  async findFriends(username: string): Promise<Friend[]> {
    return this.users as Friend[];
  }
}
