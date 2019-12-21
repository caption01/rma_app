import { orderType } from './order.type'

const INTIAL_STATE = {
    data: []
}

const orderReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case orderType.SET_SERVE_STATUS:
            return {
                ...state,
                data: action.payload
            }

        case orderType.LOAD_DATA:
            return{
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}

export default orderReducer