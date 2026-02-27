import { type DynamicModule, Global, Module } from '@nestjs/common';
import { ResponseService } from './services/response.service';

@Global()
@Module({})
export class ResponseModule {
  static forRoot(): DynamicModule {
    return {
      module: ResponseModule,
      imports: [],
      controllers: [],
      providers: [ResponseService],
      exports: [ResponseService],
    };
  }
}
