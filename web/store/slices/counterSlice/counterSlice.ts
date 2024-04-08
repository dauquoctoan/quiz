/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { incrementAsync } from './thunks'
import { IAsyncSliceState } from '@/store/types'

const initialState: IAsyncSliceState = {
    value: 0,
    status: 'idle',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Trường `` reducers` cho phép chúng tôi xác định các bộ giảm thiểu và tạo ra các hành động liên quan
    reducers: {
        increment: (state) => {
            // Redux Toolkit cho phép chúng tôi viết logic "đột biến" trong các bộ giảm tốc.Nó
            // không thực sự làm thay đổi trạng thái vì nó sử dụng thư viện imer,
            // phát hiện các thay đổi đối với "dự thảo trạng thái" và tạo ra một thương hiệu mới
            // trạng thái bất biến dựa trên những thay đổi đó
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Sử dụng loại tải trọng để khai báo nội dung của `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    // Trường `extrearers` cho phép các hành động xử lý lát cắt được xác định ở nơi khác,
    // bao gồm các hành động được tạo bởi createdasyncthunk hoặc trong các lát khác.
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
    },
})
