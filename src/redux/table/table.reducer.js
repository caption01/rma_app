import { SET_DATA_TABLE, FETCHING_STATUS } from './table.type'

const INTIAL_STATE = {
    tables: [],
    fetching: false
}

const tableReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case SET_DATA_TABLE:
            return {
                ...state,
                tables: action.payload
            }

        case FETCHING_STATUS:
            return {
                ...state,
                fetching: action.payload
            }

        default:
            return state
    }
}

export default tableReducer;