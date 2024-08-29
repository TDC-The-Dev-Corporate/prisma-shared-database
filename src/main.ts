import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// Package Imports
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import * as dotenv from 'dotenv'

// File Imports
import { HttpExceptionFilter } from 'common/helper/exception-filter';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule)
  dotenv.config()
  
  // const port: number = parseInt(process.env.SERVER_PORT)

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  app.enableCors({
    origin: '*',
  })
  app.use(cookieParser())
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    })
  )
  // Exception Filter Configuration
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3002, () => {
    console.log('[Database Service API UP]', 3002)
  })
}
bootstrap();
