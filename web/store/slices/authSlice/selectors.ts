/* Instruments */
import type { ReduxState } from '@/store'

/* handle select state */
export const selectInfo = (state: ReduxState) => state.auth.info
export const selectLoadingAuth = (state: ReduxState) => state.auth.isLoading