import { Module } from '@nestjs/common';
import { DbUserService } from './db-user.service';
import { DbUserController } from './db-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [DbUserController],
  providers: [DbUserService],
})
export class DbUserModule {}
