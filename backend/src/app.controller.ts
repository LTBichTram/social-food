import { Body, Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api')
export class AppController {
  @Get()
  sayHello(): string {
    return 'Welocome to Api Food Social App11';
  }
}
