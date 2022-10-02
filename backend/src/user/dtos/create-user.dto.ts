import { IsEmail, IsNotEmpty, Length, IsDate, IsNumber } from 'class-validator';

export class CreateUserDto {
  name: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  email?: string;
  phone?: string;
  birthDate: Date;
  gender: boolean;
}
