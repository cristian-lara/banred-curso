import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      name: 'Cristian Lara',
      password: '1234',
    },
    {
      id: 2,
      name: 'Raul Balarezo',
      password: '5678',
    },
  ];

  getUsers() {
    return this.users.map((user) => {
      delete user.password;
      return user;
    });
  }

  findUser(name:string){
    return this.users.filter(user => user.name === name)
  }
}
