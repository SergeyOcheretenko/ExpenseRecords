import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  Post,
  Query,
} from '@nestjs/common';
import { CreateRecordDto } from './dto/records.dto';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  @HttpCode(201)
  createRecord(@Body() body: CreateRecordDto) {
    return this.recordsService.createRecord(body);
  }

  @Get()
  getRecords(
    @Query('userId') userId?: string,
    @Query('categoryId') categoryId?: string,
  ) {
    try {
      if (userId && categoryId) {
        return this.recordsService.getRecordByUserAndCategory(
          userId,
          categoryId,
        );
      }

      if (userId) {
        return this.recordsService.getRecordsByUser(userId);
      }

      return this.recordsService.getAllRecords();
    } catch (err) {
      throw new HttpException(err.message, 404);
    }
  }
}
