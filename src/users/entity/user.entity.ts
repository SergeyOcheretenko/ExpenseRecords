import * as crypto from 'crypto';

export class User {
  public id: string = crypto.randomUUID();

  constructor(public name: string) {}
}
