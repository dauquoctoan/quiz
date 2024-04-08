import { IResult, IUser } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

export interface IGoogleAuth {
    idToken: string;
    type: 'google' | 'github';
}

export interface IResultLoginGoogle {
    access_token: string;
    refresh_token: string;
}

class AuthService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async singInGoogle(googleAuth: IGoogleAuth) {
        try {
            const result = await this.post<IResult<IResultLoginGoogle>>('user/auth-sign-in', googleAuth);
            result && this.setAccessToken(result?.data?.access_token);
            result && this.setRefreshToken(result?.data?.refresh_token);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getUser<T>() {
        return this.get<T>('me');
    }

    upDateUser<T>(user: IUser) {
        try {
            return this.patch<T>('user', user);
        } catch (error) {
            console.log(error)
        }
    }
}

const authService = new AuthService();
export default authService;