import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { User, UserDocument } from './model/user.schema';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOneFake(username: string): Promise<any> {
    return this.users.find((user) => user.username == username);
  }
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {
      name = '',
      email = '',
      phone = '',
      password = '',
      birthDate = '',
      gender = false,
    } = createUserDto || null;
    const foundUser = await this.userModel.findOne({ email, phone });
    if (foundUser) {
      throw new HttpException('User existed', HttpStatus.NOT_FOUND);
    }

    const hash = await bcrypt.hash(password, 10);

    const createdUser = await this.userModel.create({
      name,
      email,
      phone,
      password: hash,
      birthDate,
      gender,
    });

    return createdUser;
  }

  async findOne(loginUserDto: LoginUserDto): Promise<User> {
    const { emailOrPhone = '', password = '' } = loginUserDto || null;
    const foundUser = await this.userModel.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });
    if (!foundUser) {
      throw new HttpException('info login not correct', HttpStatus.NOT_FOUND);
    }
    const isValidPassword = await bcrypt.compare(password, foundUser.password);
    if (!isValidPassword) {
      throw new HttpException('password not correct', HttpStatus.NOT_FOUND);
    }
    return foundUser;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      email: email,
    });

    return user;
  }
}
