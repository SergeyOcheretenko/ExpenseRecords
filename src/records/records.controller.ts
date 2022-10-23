import { Body, Controller, HttpCode, Post } from '@nestjs/common';
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
}
