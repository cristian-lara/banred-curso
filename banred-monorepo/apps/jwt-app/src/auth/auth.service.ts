import { UserService } from './../user/user.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  validateUser(name: string, password: string) {
    const userFinded = this.userService.findUser(name);

    if (userFinded.length) {
      return userFinded[0];
    }
    return new NotFoundException('user is not registered');
  }
}
