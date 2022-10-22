import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneFake(email);

    if (!user) {
      return null;
    }
    if (user && user.password == password) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userSys = await this.usersService.findOne(user.id);
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
