import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }
  @Post('signup')
  signUp() {
    return this.authService.signup();
  }

  @Get('list')
  getList() {
    return this.authService.getList();
  }
}
