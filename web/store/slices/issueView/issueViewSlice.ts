/* Core */
import { IStateDate } from '@/components/issue/fillterQueryIssue';
import { IItemData, IItemSelected } from '@/components/ui/collapse/collapse';
import { IInfo, TLayout } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IIssueViewSlice{
    itemSelected: IItemSelected;
    lsItemConvert: IItemData[];
    customDate: IStateDate;
    dataFilter: IItemData[];
    lsDisableTable: string[];
    isListIssue: boolean;
    layout: TLayout | null,
}

const initialState: IIssueViewSlice = {
    dataFilter: [],
    itemSelected: {},
    lsItemConvert: [],
    customDate:{},
    lsDisableTable: [],
    isListIssue: false,
    layout: null,
}

function handleRemoveChild(lsItemSelected:IItemSelected,value: string) {
    const newData = { ...lsItemSelected };
        if (newData[value]) delete newData[value];
        return newData;
}

function handleRemoveParent(lsItemSelected:IItemSelected, value: string) {
    const newData = { ...lsItemSelected };
        Object.keys(lsItemSelected).forEach((e) => {
            if (newData[e].parentKey === value) {
                delete newData[e];
            }
        });
        return newData;
}

export const issueViewSlice = createSlice({
    name: 'issueView',
    initialState,
    reducers: {
        setLayoutProjectView: (state, action: PayloadAction<TLayout>)=>{
            state.layout = action.payload
        },
        setDisableTable: (state, action: PayloadAction<string[]>)=>{
            state.lsDisableTable = action.payload
        },

        setIsListIssue: (state, action: PayloadAction<boolean>)=>{
            state.isListIssue = action.payload
        },

        setDataFilter: (state, action: PayloadAction<IItemData[]>)=>{
            state.dataFilter = action.payload
        },

        setItemSelected: (state, action: PayloadAction<IItemSelected>) => {
            state.itemSelected = action.payload;
        },

        removeChildItemSlected: (state, action: PayloadAction<string>) => {
            state.itemSelected =  handleRemoveChild(state.itemSelected, action.payload)
        },

        removeParentItemSlected: (state, action: PayloadAction<string>) => {
            state.itemSelected =  handleRemoveParent(state.itemSelected, action.payload)
        },

        setLsItemConvert: (state, action: PayloadAction<IItemData[]>) => {
            state.lsItemConvert = action.payload;
        },

        setCustomDate: (state, action: PayloadAction<IStateDate>) => {
            state.customDate = action.payload;
        },

        clear: (state) => {
            state.customDate = {};
            state.itemSelected = {};
            state.lsItemConvert = [];
        },
    },
})
