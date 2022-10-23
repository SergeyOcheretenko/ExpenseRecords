import * as crypto from 'crypto';

export class Category {
  public id = crypto.randomUUID();

  constructor(public categoryName: string) {}
}
