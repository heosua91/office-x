import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '../router/router.module';
import { AppMiddlewareModule } from './app.middleware.module';

/**
 * Root application module that orchestrates all feature modules
 * This is the entry point for the NestJS application
 */
@Module({
  imports: [
    // Core infrastructure modules
    CommonModule,
    AppMiddlewareModule,

    // Application feature modules
    RouterModule,

    // Schedule modules - for cron jobs
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
