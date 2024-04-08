import { createSlice } from '@reduxjs/toolkit';

interface ILayoutSlice {
    isCollap: boolean;
}

const initialState: ILayoutSlice = {
    isCollap: false,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setToggleCollap: (state) => {
            state.isCollap = !state.isCollap;
        }
    },
})
