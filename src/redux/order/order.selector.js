import { createSelector } from 'reselect'

const selectOrderState = (state) => state.order

export const selectOrderLists = createSelector(
    [selectOrderState],
    order => order.data
)