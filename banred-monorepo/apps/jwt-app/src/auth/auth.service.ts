import { UserService } from './../user/user.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  validateUser(name: string, pass: string) {
    const userFinded = this.userService.findUser(name);

    if (userFinded.length) {
      const { password, ...profile } = userFinded[0];
      if (password === pass) {
        return profile;
      }
      return new BadRequestException()
    }
    return new NotFoundException('user is not registered');
  }
}
