import { Injectable, Logger } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private readonly logger = new Logger('UsersService');

  public createUser(username: string) {
    const newUser: User = new User(username);
    this.users.push(newUser);
    this.logger.log('User was created');
    return newUser;
  }
}
