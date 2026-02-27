import { Module } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';
import { RoutesPublicModule } from './routers/routes.public.module';

@Module({
  imports: [
    RoutesPublicModule,
    NestJsRouterModule.register([
      {
        path: '/',
        module: RoutesPublicModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RouterModule {}
