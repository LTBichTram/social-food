import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post('/signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUp(@Body() createUserDto: CreateUserDto) {
    let userResgister = await this.usersService.create(createUserDto);
    return userResgister;
  }

  @Post('/updateProfile')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        outletId: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async updateProfile(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinaryService.uploadImage(file);
  }
}
