import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import basicAuth from 'basic-auth';
import * as bodyParser from 'body-parser';
import { useContainer } from 'class-validator';
import type { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import * as qs from 'qs';
import { AppModule } from './app/app.module';

/**
 * Configure Swagger documentation with basic auth
 */
function setupSwagger(
  app: INestApplication,
  { username, password }: { username: string; password: string }
): void {
  const config = new DocumentBuilder()
    .setTitle('OfficeX API')
    .setDescription('OfficeX API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const swaggerAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const user = basicAuth(req);

    if (!user || user.name !== username || user.pass !== password) {
      res.set('WWW-Authenticate', 'Basic realm="API Docs"');
      return res.status(401).send('Authentication required.');
    }

    next();
  };

  app.use(
    '/docs',
    swaggerAuthMiddleware,
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",
            "'unsafe-eval'",
            'https://cdn.jsdelivr.net/npm/@scalar/api-reference',
          ],
        },
      },
    }),
    apiReference({
      spec: {
        content: document,
      },
    })
  );
}

/**
 * Setup middleware configurations
 */
function setupMiddleware(app: INestApplication): void {
  // Use DI container of NestJS for class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Fix error "request entity too large"
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // Configure security middleware
  app.use(helmet());

  // Parse query parameters
  app.use((req: Request, _res: Response, next: NextFunction) => {
    req.query = qs.parse(req.url.split('?')[1]);
    next();
  });

  // Enable CORS
  app.enableCors();
}

/**
 * Configure shutdown hooks for graceful application termination
 */
function setupShutdownHooks(app: INestApplication): void {
  // Enable graceful shutdown hooks
  app.enableShutdownHooks();
}

/**
 * Bootstrap application
 */
async function bootstrap(): Promise<void> {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    // Apply middleware configurations
    setupMiddleware(app);

    // Setup shutdown hooks
    setupShutdownHooks(app);

    // Setup Swagger if enabled
    const enableSwagger: boolean = configService.get<boolean>('app.enableSwagger');
    if (enableSwagger) {
      const basicAuthUsername: string = configService.get<string>('app.basicAuthUsername');
      const basicAuthPassword: string = configService.get<string>('app.basicAuthPassword');

      setupSwagger(app, {
        username: basicAuthUsername,
        password: basicAuthPassword,
      });
    }

    // Start the application
    const port: number = configService.get<number>('app.port') || 3000;
    await app.listen(port);
    console.info(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    console.error('Error during application bootstrap:', error);
    process.exit(1);
  }
}

// Start the application
bootstrap();
