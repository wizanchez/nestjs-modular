import { HttpModule, Module, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './app/products/controllers/products.controller';
import { CategoriesController } from './app/products/controllers/categories.controller';
import { ProductsService } from './app/products/services/products.service';
import { UsersModule } from './app/users/users.module';
import { ProductsModule } from './app/products/products.module';
import { DatabaseModule } from './app/database/database.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATA_BASE_NAME: Joi.string().required(),
        DATA_BASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    ProductsModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [
    AppService,
    ProductsService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
