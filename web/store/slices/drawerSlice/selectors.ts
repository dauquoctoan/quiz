/* Instruments */
import type { ReduxState } from '@/store'

/* handle select state */
export const selectIitemIssueSelected = (state: ReduxState) => state.drawer.issueSlected;
export const selectShowDrawer = (state: ReduxState) => state.drawer.showDrawer;



