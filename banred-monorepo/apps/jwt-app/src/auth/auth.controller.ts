import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/:nombre/:pass')
  login(@Param() usuario: { nombre: string; pass: string }) {
    return this.authService.validateUser(usuario.nombre, usuario.pass);
  }
}
