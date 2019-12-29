import { SET_DATA_TABLE, FETCHING_STATUS } from './table.type';

export const setDataTable = (tables) => ({
    type: SET_DATA_TABLE,
    payload: tables
})

export const fetching = (status) => ({
    type: FETCHING_STATUS,
    payload: status
})
