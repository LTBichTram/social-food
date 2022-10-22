import {
  Controller,
  Post,
  UseGuards,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Public } from './decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    console.log('====================================');
    console.log(req);
    console.log('====================================');
    if (req.user) {
      return this.authService.login(req.user);
    }
    throw new BadRequestException('Email or password incorrect');
  }
}
