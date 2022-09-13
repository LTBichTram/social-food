import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    console.log('Login');
    return 'login';
  }
  signup() {
    console.log('SignUp');
  }
}
