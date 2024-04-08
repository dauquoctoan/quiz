import { Request } from 'express'

export interface IToken {
    payload: IPayloadUser,
    iat: number,
    exp: number
}

export interface RequestContext {
    user?: string;
}
export interface IAuthRequest extends Request {
    user?: IPayloadUser;
}

export interface IPayloadUser {
    id: string;
    email: string;
}