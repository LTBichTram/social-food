import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  findAll(): string {
    return this.authService.login();
  }
  @Post('login')
  login() {
    return 'I am login';
  }
  @Post('signup')
  signUp() {
    return 'I am signup';
  }
}
