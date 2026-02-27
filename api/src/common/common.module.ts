import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';
import { RequestModule } from './request/request.module';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      expandVariables: false,
    }),
    RequestModule,
    ResponseModule.forRoot(),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CommonModule {}
