import { Module } from '@nestjs/common';
import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { RecordsController } from './records.controller';
import { RecordsService } from './records.service';

@Module({
  imports: [UsersModule, CategoriesModule],
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule {}
