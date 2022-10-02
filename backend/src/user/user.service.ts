import { Injectable } from '@nestjs/common';

//@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Linh' },
    { id: 2, name: 'Hao' },
  ];
  getAll() {
    return this.users;
  }
}
