import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginUserDto } from '../../user/dtos/login-user.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
