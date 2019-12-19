import { createSelector } from 'reselect';

const selectTables = state => state.table;

export const selectTablesAll = createSelector(
    [selectTables],
    table => table.tables
)