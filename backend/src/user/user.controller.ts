import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('/signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUp(@Body() createUserDto: CreateUserDto) {
    let x = await this.usersService.create(createUserDto);

    return x;
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    await this.usersService.findOne(loginUserDto);
  }
}
