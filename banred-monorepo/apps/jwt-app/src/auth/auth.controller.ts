import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

export interface IUser {
  nombre: string;
  pass: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/:nombre/:pass')
  login(@Param() usuario: IUser) {
    return this.authService.validateUser(usuario.nombre, usuario.pass);
  }
}
