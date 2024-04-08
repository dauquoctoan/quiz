/* Core */import { IInfo, IUser } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getUsertAsync } from './thunks';

interface IAuthSlice {
    info?: IInfo | null;
    statusCode: number;
    isLoading: boolean;
}

const initialState: IAuthSlice = {
    info: null,
    statusCode: 0,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<IInfo | null>) => {
            state.info = action.payload;
        },
        clearInfo: (state) => {
            state.info = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsertAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsertAsync.fulfilled, (state, action) => {
                state.info = action.payload || null;
                state.isLoading = false;
            })
    },
})
