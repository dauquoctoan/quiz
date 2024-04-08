/* Core */

import { IIssue } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IDrawerSlice{
    issueSlected?: IIssue;
    showDrawer:boolean;
}

const initialState: IDrawerSlice = {
    showDrawer: false,
    issueSlected: undefined,
}

export const drawerViewSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer:(state) => {
            state.showDrawer = true;
        },
        closeDrawer:(state) => {
            state.showDrawer = false;
            state.issueSlected= undefined;
        },
        setIssueSlected:(state, action: PayloadAction<IIssue>) =>{
            state.issueSlected = action.payload;
        },
    },
})
