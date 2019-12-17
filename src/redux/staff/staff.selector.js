import { createSelector } from 'reselect';

const selectStaff = state => state.staff;

export const selectStatusStaff = createSelector(
    [selectStaff],
    (staff) => staff.status
)

export const selectRoleStaff = createSelector(
    [selectStaff],
    (staff) => staff.role
)

export const selectDataFromFetch = createSelector(
    [selectStaff],
    staff => staff.dataFromFetch
)