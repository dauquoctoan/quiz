/* Instruments */
import { createAppAsyncThunk } from '@/store/createAppAsyncThunk'
import authService from '@/services/auth-services'
import { IInfo } from '@/types';

export const getUsertAsync = createAppAsyncThunk(
    'auth/fetchGetUser',
    async () => {
        return await authService.getUser<IInfo>();
    }
)
