import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const selectUserData = createSelector(
    [selectUserState],
    data => data
)

export const selectUserLoading = createSelector(
    [selectUserState],
    loading => loading
    
)