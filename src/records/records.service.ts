import { Injectable, Logger } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users/users.service';
import { CreateRecordDto } from './dto/records.dto';
import { Record } from './entity/record.entity';

@Injectable()
export class RecordsService {
  private records: Record[] = [];
  private readonly logger = new Logger('RecordsService');

  constructor(
    private readonly usersService: UsersService,
    private readonly categoriesService: CategoriesService,
  ) {}

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
    const userIds = this.usersService.getAllUsers().map((user) => user.id);
    if (!userIds.includes(userId)) {
      throw new Error('The user with this ID does not exist');
    }
    return this.records.filter((record) => record.userId === userId);
  }

  public getRecordByUserAndCategory(userId: string, categoryId: string) {
    const userIds = this.usersService.getAllUsers().map((user) => user.id);
    const categoryIds = this.categoriesService
      .getAllCategories()
      .map((category) => category.id);

    if (!userIds.includes(userId)) {
      throw new Error('The user with this ID does not exist');
    }
    if (!categoryIds.includes(categoryId)) {
      throw new Error('The category with this ID does not exist');
    }
    return this.records.filter(
      (record) => record.userId === userId && record.categoryId === categoryId,
    );
  }
}
