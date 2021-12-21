import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './app/products/controllers/products.controller';
import { CategoriesController } from './app/products/controllers/categories.controller';
import { ProductsService } from './app/products/services/products.service';
import { UsersModule } from './app/users/users.module';
import { ProductsModule } from './app/products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
