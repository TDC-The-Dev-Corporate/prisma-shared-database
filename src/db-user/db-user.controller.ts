import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbUserService } from './db-user.service';


@Controller('db-user')
export class DbUserController {
  constructor(private readonly dbUserService: DbUserService) {}

  @Post()
  create(@Body() createDbUserDto: any) {
    return this.dbUserService.create(createDbUserDto);
  }

  @Get('isExitUser/:email')
  IsUserExit(@Param('email') email: string) {
    return this.dbUserService.IsUserExit(email);
  }
}
