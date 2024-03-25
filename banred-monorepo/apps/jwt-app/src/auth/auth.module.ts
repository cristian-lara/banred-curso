import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { LocalStrategyService } from './local-strategy.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';

@Module({
  imports: [UserModule, PassportModule,
  JwtModule.register({
    secret: config.jtwSecret,
    signOptions: {expiresIn: '60s'}
  })
  ],
  providers: [AuthService, LocalStrategyService],
  controllers: [AuthController]
})
export class AuthModule {}
