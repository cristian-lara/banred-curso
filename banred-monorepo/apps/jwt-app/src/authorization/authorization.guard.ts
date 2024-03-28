import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
const jwt = require('express-jwt')

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {

const checkJwt = promisify (jwt(
  {
    secret: expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri:'https://banred-curso.us.auth0.com/.well-known/jwks.json',
      
    }),
    audience:'https://app-web.com',
    issuer:'banred-curso.us.auth0.com', // domain
    algorithm: ['RS256']
  }
))

try{
  checkJwt()
  return true;
}catch(error){
  throw new UnauthorizedException(error)
}
  }
}
