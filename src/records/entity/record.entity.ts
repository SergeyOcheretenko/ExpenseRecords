import * as crypto from 'crypto';

export class Record {
  public id = crypto.randomUUID();
  public date = new Date(Date.now());

  constructor(
    public userId: string,
    public categoryId: string,
    public expense: number,
  ) {}
}
