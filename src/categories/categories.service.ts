import { Injectable, Logger } from '@nestjs/common';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];
  private readonly logger = new Logger('CategotiesService');

  public createCategory(categoryName: string) {
    const category = new Category(categoryName);
    this.categories.push(category);

    this.logger.log(`Category ${category.id} was created`);

    return category;
  }

  public getAllCategories() {
    return this.categories;
  }
}
