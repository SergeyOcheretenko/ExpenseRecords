import { Injectable, Logger } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private readonly logger = new Logger('UsersService');

  public createUser(username: string): User {
    const user: User = new User(username);
    this.users.push(user);

    this.logger.log(`User ${user.id} was created`);

    return user;
  }

  public getAllUsers(): User[] {
    return this.users;
  }

  public getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
