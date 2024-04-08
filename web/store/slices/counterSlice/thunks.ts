/* Instruments */
import { createAppAsyncThunk } from '@/store/createAppAsyncThunk'
import { fetchIdentityCount } from './fetchIdentityCount'
import { selectCount } from './selectors'
import { counterSlice } from './counterSlice'
import type { ReduxThunkAction } from '@/store'

// Hàm bên dưới được gọi là Thunk và cho phép chúng tôi thực hiện logic async.Nó
// có thể được gửi như một hành động thông thường: `Công văn (gia tăngAsync (10))`.Cái này
// sẽ gọi Thunk với hàm `công văn` là đối số đầu tiên.Không đồng bộ
// Mã sau đó có thể được thực thi và các hành động khác có thể được gửi đi.Thunks là
// thường được sử dụng để thực hiện các yêu cầu async.
export const incrementAsync = createAppAsyncThunk(
    'counter/fetchIdentityCount',
    async (amount: number) => {
        const response = await fetchIdentityCount(amount)
        // The value we return becomes the `fulfilled` action payload
        return response
    }
)

// Chúng ta cũng có thể viết Thunks bằng tay, có thể chứa cả logic đồng bộ và async.
// Dưới đây là một ví dụ về các hành động gửi đi có điều kiện dựa trên trạng thái hiện tại.
export const incrementIfOddAsync =
    (amount: number): ReduxThunkAction =>
        (dispatch, getState) => {
            const currentValue = selectCount(getState())
            if (currentValue % 2 === 1) {
                dispatch(counterSlice.actions.incrementByAmount(amount))
            }
        }