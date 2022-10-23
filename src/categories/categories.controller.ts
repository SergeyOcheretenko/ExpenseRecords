import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(201)
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoriesService.createCategory(body.categoryName);
  }

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
}
