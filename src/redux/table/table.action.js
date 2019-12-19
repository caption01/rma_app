import { SET_DATA_TABLE, FETCHING_STATUS } from './table.type';

export const setDataTable = (tables) => ({
    type: SET_DATA_TABLE,
    payload: tables
})

export const fetching = (status) => ({
    type: FETCHING_STATUS,
    payload: status
})

// export const fetchDataTable = async() => {
//     return dispatch => {
//             fetch(`http://localhost:3000/tables`)
//                 .then(result => dispatch(setDataTable(result.json())))
//                 .catch(err => console.log(`cant fetch table data ${err}`))
//     }
// }