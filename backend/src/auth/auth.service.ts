import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../user/dtos/login-user.dto';
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto) {
    const result = await this.usersService.findOne(loginUserDto);
    if (!result) return null;
    return result;
  }
}
