import { Injectable, Logger } from '@nestjs/common';
import { CreateRecordDto } from './dto/records.dto';
import { Record } from './entity/record.entity';

@Injectable()
export class RecordsService {
  private records: Record[] = [];
  private readonly logger = new Logger('RecordsService');

  public createRecord({ userId, categoryId, expense }: CreateRecordDto) {
    const record = new Record(userId, categoryId, expense);
    this.records.push(record);

    this.logger.log(`Record ${record.id} was created`);

    return record;
  }

  public getAllRecords() {
    return this.records;
  }

  public getRecordsByUser(userId: string) {
    return this.records.filter((record) => record.userId === userId);
  }

  public getRecordByUserAndCategory(userId: string, categoryId: string) {
    return this.records.filter(
      (record) => record.userId === userId && record.categoryId === categoryId,
    );
  }
}
