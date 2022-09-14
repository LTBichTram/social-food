import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): object {
    console.log('Login');
    return {};
  }
  signup() {
    console.log('SignUp');
  }
}
