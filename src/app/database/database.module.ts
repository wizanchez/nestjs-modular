import { Module, Global } from '@nestjs/common';
const API_KEY = '1234123';
const API_KEY_PROD = 'PROD1234123';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
// eslint-disable-next-line prettier/prettier
export class DatabaseModule { }
