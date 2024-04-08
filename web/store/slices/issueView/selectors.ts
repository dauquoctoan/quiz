/* Instruments */
import type { ReduxState } from '@/store'

/* handle select state */
export const selectItemSelected = (state: ReduxState) => state.issueView.itemSelected;
export const selectLsItemConvert = (state: ReduxState) => state.issueView.lsItemConvert;
export const selectCustomDate = (state: ReduxState) => state.issueView.customDate;
export const selectStateIssueView = (state: ReduxState) => state;
export const selectDataFilter = (state: ReduxState) => state.issueView.dataFilter;
export const selectlsDisableTable = (state: ReduxState) => state.issueView.lsDisableTable;
export const selectListIssue = (state: ReduxState) => state.issueView.isListIssue;
export const selectLayoutProjectView = (state: ReduxState) => state.issueView.layout;



