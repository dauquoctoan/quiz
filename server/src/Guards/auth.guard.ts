import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { extractTokenFromHeader } from 'src/helper/token';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();

        const token = extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();

        try {
            const info = this.jwtService.verify(token);
            if (info) {
                request['user'] = info.payload;
                return true;
            }
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
