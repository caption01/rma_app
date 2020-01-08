import { createSelector } from 'reselect'

const selectHistoryState = state => state.history

export const selectFoodHistory = createSelector(
    [selectHistoryState],
    state => state.food
)

export const selectHistoryIndex = createSelector(
    [selectHistoryState],
    state => state.index
)

export const selectUserHisroty = createSelector(
    [selectHistoryState],
    state => state.users
)
