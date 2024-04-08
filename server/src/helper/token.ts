import { Request } from 'express';
export function extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const result = type === 'Bearer' ? token : undefined;
    return result;
}

export function createToken(payload) {
    return {
        access_token: this.jwtService.sign({ payload }),
        refresh_token: this.jwtService.sign({ payload }, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION })
    }
}