import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('api/users')
export class UserController {
  @Get()
  getUsers(@Query() query) {
    return query;
  }
  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() user: CreateUserDto, @Res() response: Response) {
    response.send(user);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: Number) {
    return id;
  }
}
