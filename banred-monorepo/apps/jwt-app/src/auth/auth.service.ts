import { UserService } from './../user/user.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService
    ) {}

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

  login(user: IUser){
    const payload = { username: user.nombre, sub: '1'};
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
