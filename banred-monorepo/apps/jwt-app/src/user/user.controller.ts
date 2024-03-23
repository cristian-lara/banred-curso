import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('local'))
  @Get('/:name')
  findUser(@Param('name') name: string) {
    return this.userService.findUser(name);
  }
}
