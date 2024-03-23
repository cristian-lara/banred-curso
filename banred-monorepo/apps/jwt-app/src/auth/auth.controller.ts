import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/:nombre/:pass')
  login(@Param() usuario: { nombre: string; pass: string }) {
    return this.authService.validateUser(usuario.nombre, usuario.pass);
  }
}
