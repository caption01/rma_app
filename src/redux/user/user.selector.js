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

export const selectMenu = createSelector(
    [selectUserState],
    object => object.menus
)
