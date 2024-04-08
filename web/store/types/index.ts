export interface IAsyncSliceState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

