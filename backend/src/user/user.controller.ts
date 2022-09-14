import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {
  @Get()
  getUsers() {
    return [{ id: 11, name: 'Ho Quang Linh' }];
  }
  @Post()
  addUser(@Body() user, @Res() response: Response) {
    response.send(user);
  }
}
