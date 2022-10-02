import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  getList() {
    console.log(this.userService);
    return this.userService.getAll();

    //return 'test';
  }
  login(): string {
    console.log('Login');
    return 'kdged';
  }
  signup() {
    console.log('SignUp');
  }
}
