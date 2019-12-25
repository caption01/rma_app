import { userType } from './user.type'

const INTIAL_STATE = {
    data: {},
    loading: true,
    err: '',
    menus: [],
    orderHeader: {},
    order_list: []

};

const userReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case userType.FETCH_DATA_START:
            return {
                ...state,
                loading: action.payload
            }

        case userType.FETCH_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case userType.FETCH_DATA_FAIL:
            return {
                ...state,
                err: action.payload
            }

        case userType.SET_USER_DATA:
            return {
                ...state,
                data: action.payload
            }

        case userType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: action.payload
            }

        case userType.SET_MENU:
            return {
                ...state,
                menus: action.payload
            }

        case userType.SET_ORDER_HEADER:
            return {
                ...state,
                orderHeader: {
                    status: true,
                    tablenumber: action.payload.tableNumber,
                    bill_id: action.payload.billId
                }
            }

        case userType.UPDATE_ORDER_REQ:
            return {
                ...state,
                order_list: [
                    {
                        name: action.payload.name,
                        unit: action.payload.unit
                    }
                ]
            }

        default: 
            return state
    }
};

export default userReducer;