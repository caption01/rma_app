import { orderType } from './order.type'

const orderData = [
    {
        key:1,
        order_id: 'ODER-DATA-TEST-0001',
        menu: 'brownRice',
        unit: 4,
        table_number: 3,
        date: new Date().toLocaleTimeString(),
        status: true
    },
    {
        key:2,
        order_id: 'ODER-DATA-TEST-0002',
        menu: 'waGu',
        unit: 1,
        table_number: 3,
        date: new Date().toLocaleTimeString(),
        status: true
    },
    {
        key:3,
        order_id: 'ODER-DATA-TEST-0001',
        menu: 'brownRice',
        unit: 2,
        table_number: 4,
        date: new Date().toLocaleTimeString(),
        status: true
    },
  ];

const INTIAL_STATE = {
    data: orderData
}

const orderReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case orderType.SET_SERVE_STATUS:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}

export default orderReducer