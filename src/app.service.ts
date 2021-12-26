import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('TASKS') private tasks: any[],
    // eslint-disable-next-line prettier/prettier,
  ) { }

  getHello(): string {
    console.log(this.tasks);
    return `Hello World! ${this.configService.apiKey}`;
  }
}
