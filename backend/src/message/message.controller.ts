import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/message')
export class MessageController {
  @Get()
  sendMessage() {
    return 'Send message';
  }
}
