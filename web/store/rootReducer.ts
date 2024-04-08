/* Instruments */
import { counterSlice, layoutSlice, authSlice, issueViewSlice, drawerViewSlice } from './slices'

export const reducer = {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    layout: layoutSlice.reducer,
    issueView: issueViewSlice.reducer,
    drawer: drawerViewSlice.reducer
}