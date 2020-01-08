import { historyType } from './history.type'

const INTIAL_STATE = {
    food: [],
    index: 0,
    users: [],
    error: ''
};

const historyReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(historyType.FETCH_HISTORY_START):
            return state

        case(historyType.FETCH_HISTORY_SUCCESS):
            return state

        case(historyType.SET_HISTORY_FOOD):
            return {
                ...state,
                food: action.payload
            }
        
        case(historyType.FETCH_HISTORY_FAIL):
            return {
                ...state,
                error: action.payload
            }
        case(historyType.SET_INDEX):
            return {
                ...state,
                 index: state.index === 2 && action.payload === 1 ? 
                        0 : state.index ===0 && action.payload === -1 ?
                        2 : state.index + action.payload
            }

        case(historyType.FETCH_HISTORY_WITH_DATE_START):
            return state

        case(historyType.SET_HISTORY_USER):
            return {
                ...state,
                users: action.payload
            }

        default: 
            return state
    }
};

export default historyReducer;